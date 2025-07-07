import type { PrismaService } from "@/prisma/prisma.service";
import { ForbiddenException, Inject, Injectable, UnauthorizedException, forwardRef } from "@nestjs/common";
import type { ConfigService } from "@nestjs/config";
import type { JwtService } from "@nestjs/jwt";
import { hash, verify } from "argon2";
import { randomInt } from "crypto";
import type { Request } from "express";
import type { JwtPayload } from "./auth.interface";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenService {
	constructor(
		private readonly jwtService: JwtService,
		@Inject(forwardRef(() => AuthService))
		private readonly authService: AuthService,
		private readonly configService: ConfigService,
		private readonly prismaService: PrismaService,
	) {}

	async generateCode() {
		return randomInt(100000, 999999);
	}

	async generateTokens(userId: string, email: string) {
		const payload: JwtPayload = {
			sub: userId,
			email: email,
		};

		const [accessToken, refreshToken] = await Promise.all([
			this.jwtService.signAsync(payload, {
				secret: this.configService.getOrThrow<string>("JWT_SECRET"),
				expiresIn: this.configService.getOrThrow<string>("JWT_EXPIRES_IN"),
			}),
			this.jwtService.signAsync(payload, {
				secret: this.configService.getOrThrow<string>("REFRESH_TOKEN_SECRET"),
				expiresIn: this.configService.getOrThrow<string>("REFRESH_TOKEN_TIME_LIFE"),
			}),
		]);

		return { accessToken, refreshToken };
	}

	async storeRefreshToken(
		userId: string,
		refreshToken: string,
		sessionId: string,
		options: { ipAddress: string; userAgent: string; deviceName: string },
	) {
		const hashedRefreshToken = await this.authService.hashing(refreshToken);

		const session = this.prismaService.session.upsert({
			where: { id: sessionId ?? "" },
			update: {
				lastLoginAt: new Date(),
				refreshTokenHashed: hashedRefreshToken,
				...options,
			},
			create: {
				id: sessionId,
				userId,
				refreshTokenHashed: hashedRefreshToken,
				...options,
			},
		});

		return session;
	}

	async refreshToken(req: Request, refreshToken: string) {
		const userId = String(req.user?.id);

		const sessions = await this.prismaService.session.findMany({
			where: { userId, NOT: { refreshTokenHashed: null }, revoked: false },
			include: { user: true },
		});

		if (!sessions || sessions.length < 0) {
			throw new ForbiddenException("Access denied");
		}

		let session;

		let isMatched = false;

		for (const s of sessions) {
			const matched = await verify(s.refreshTokenHashed!, refreshToken);
			if (matched) {
				isMatched = true;
				session = s;
				break;
			}
		}

		if (!isMatched || !session) {
			throw new UnauthorizedException("Access denied");
		}

		const tokens = await this.generateTokens(userId, session.user.email);

		const detailAgentUser = this.authService.getDataUser(req);

		// only hashed refreshToken must be saved into the session
		await this.storeRefreshToken(userId, await hash(tokens.refreshToken), session.id, detailAgentUser);

		return tokens;
	}
}

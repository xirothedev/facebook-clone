/* eslint-disable @typescript-eslint/no-unused-vars */
import type { PrismaService } from "@/prisma/prisma.service";
import type { RedisService } from "@/redis/redis.service";
import { Snowflake } from "@/utils/snowflake";
import {
	ConflictException,
	ForbiddenException,
	Inject,
	Injectable,
	NotFoundException,
	UnauthorizedException,
	forwardRef,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { JwtService } from "@nestjs/jwt";
import { argon2id, hash, verify } from "argon2";
import type { CookieOptions, Request, Response } from "express";
import type { EmailService } from "src/email/email.service";
import { UAParser } from "ua-parser-js";
import type { UsersService } from "../users/users.service";
import type { UserWithPrimaryEmailAndWithoutPassword } from "./auth.interface";
import type { ChangePasswordDto, ForgotPasswordDto } from "./dto/change-password.dto";
import type { RegisterUser } from "./dto/register-auth.dto";
import { TokenService } from "./token.service";

const MAX_AVAILABLE_TIME = 5 * 60_000;
const MAX_TIME_SAVE = 60 * 60 * 24 * 30; // 30 days
const TIME_LIFE_SESSION = 10 * 365 * 24 * 60 * 60 * 1000; // 10 years
const MAX_LIFE_REFRESH_TOKEN = 7 * 24 * 60 * 60 * 1000; // 7day
const MAX_LIFE_ACCESS_TOKEN = 60 * 60 * 1000; // 1h

@Injectable()
export class AuthService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly usersService: UsersService,
		private readonly emailService: EmailService,
		@Inject(forwardRef(() => TokenService))
		private readonly tokenService: TokenService,
		private readonly redisService: RedisService,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) {}

	public async hashing(string: string): Promise<string> {
		return await hash(string, {
			type: argon2id,
			memoryCost: 2 ** 16,
			timeCost: 3,
			parallelism: 1,
			hashLength: 32,
		});
	}

	/**
	 * Validates an access token and returns user information
	 * @param accessToken - The JWT access token to validate
	 * @throws UnauthorizedException - If token is invalid, expired, or user not found
	 */
	async validate(accessToken: string) {
		try {
			const payload = await this.jwtService.verifyAsync(accessToken, {
				secret: this.configService.getOrThrow<string>("JWT_SECRET"),
			});

			// Verify that the user exists in the database
			const user = await this.prismaService.user.findUnique({
				where: { id: payload.sub },
				include: { primaryEmail: true },
			});

			if (!user) {
				throw new UnauthorizedException("User not found");
			}

			// Check if user has any active sessions (optional additional security)
			const activeSession = await this.prismaService.session.findFirst({
				where: {
					userId: user.id,
					revoked: false,
				},
			});

			if (!activeSession) {
				throw new UnauthorizedException("User session is revoked");
			}

			return user;
		} catch (error) {
			if (error instanceof UnauthorizedException) {
				throw error;
			}
			throw new UnauthorizedException("Invalid or expired access token");
		}
	}

	// get ip user
	private extractIp(req: Request): string {
		const xForwardedFor = req.headers["x-forwarded-for"] as string;
		return xForwardedFor?.split(",")[0] || req.socket.remoteAddress || "";
	}

	// get user agent
	private getDeviceName(userAgent: string): string {
		const parser = new UAParser(userAgent);
		const browser = parser.getBrowser().name || "Unknown browser";
		const os = parser.getOS().name || "Unknown OS";
		return `${browser} on ${os}`;
	}

	// detect other UserAgent
	detectDevice(userId: string, ip: string, deviceName: string) {
		return this.prismaService.session.findFirst({
			where: { userId, deviceName },
			orderBy: { createdAt: "desc" },
		});
	}

	getDataUser(req: Request) {
		const ipAddress = this.extractIp(req); // ip user
		const userAgent = req.headers["user-agent"] || "Unknown"; // user agent
		const deviceName = this.getDeviceName(userAgent);

		return { ipAddress, userAgent, deviceName };
	}

	async registerUser(body: RegisterUser) {
		const user = await this.usersService.findPrimaryUserByEmail(body.email);

		if (user) {
			throw new ConflictException("This email has been registered");
		}

		const hashedPassword = await this.hashing(body.password);
		const snowflake = new Snowflake();

		const newUser = await this.prismaService.user.create({
			data: {
				profileId: snowflake.generate(),
				displayName: body.displayName,
				birthday: body.birthday,
				gender: body.gender,
				primaryEmail: { create: { value: body.email } },
				hashedPassword: hashedPassword,
			},
		});

		return {
			message: "Register successful",
			data: newUser,
		};
	}

	async changePassword(data: ChangePasswordDto, req: Request) {
		if (!req.user?.id) {
			throw new UnauthorizedException("User ID is missing");
		}

		const user = await this.prismaService.user.findUnique({
			where: { id: req.user?.id },
			omit: { hashedPassword: false },
		});

		if (!user) {
			throw new NotFoundException("User not found");
		}

		const isMatch = await verify(user.hashedPassword, data.oldPassword);

		if (!isMatch) {
			throw new UnauthorizedException("Password is not matched");
		}

		await this.redisService.set(req.user.id, data.oldPassword, MAX_TIME_SAVE);

		const hashedNewPassword = await this.hashing(data.newPassword);

		const newUser = await this.prismaService.user.update({
			where: { id: req.user.id },
			data: { hashedPassword: hashedNewPassword },
			include: { primaryEmail: { select: { value: true } } },
		});

		const { hashedPassword, ...userWithoutPassword } = newUser;

		await this.emailService.sendNotificationResetPassword(newUser.primaryEmail.value);

		return {
			message: "Change Password successful",
			data: userWithoutPassword,
		};
	}

	async forgotPassword(email: string) {
		const user = await this.prismaService.user.findFirst({
			where: { primaryEmail: { value: email } },
		});

		if (!user) {
			throw new NotFoundException("Account is not exited");
		}

		const token = await this.tokenService.generateCode();

		await this.prismaService.authentication.upsert({
			where: { id: { type: "VERIFICATION", userId: user.id } },
			update: {
				code: token.toString(),
				expiresAt: new Date(Date.now() + MAX_AVAILABLE_TIME),
			},
			create: {
				type: "VERIFICATION",
				code: token.toString(),
				userId: user.id,
				expiresAt: new Date(Date.now() + MAX_AVAILABLE_TIME),
			},
		});

		await this.emailService.sendResetPasswordAccount(email, String(token));

		return {
			message: "Send request forgot password successful",
		};
	}

	async verifyTokenForgotPassword(data: ForgotPasswordDto) {
		const auth = await this.prismaService.authentication.findFirst({
			where: { userId: data.userId, type: "VERIFICATION" },
		});

		if (!auth) {
			throw new NotFoundException("Authentication process is not available");
		}

		if (auth.code !== data.token) {
			throw new ForbiddenException("Code does not matched");
		}

		await this.prismaService.user.update({
			where: { id: data.userId },
			data: {
				hashedPassword: await this.hashing(data.newPassword),
				auth: {
					delete: { id: { type: "VERIFICATION", userId: data.userId } },
				},
			},
		});

		await this.emailService.sendNotificationResetPassword(data.email);

		return {
			message: "Change password successful",
		};
	}

	async createSession(user: UserWithPrimaryEmailAndWithoutPassword, res: Response, req: Request) {
		const ipAddress = this.extractIp(req);
		const userAgent = req.headers["user-agent"] || "Unknown";
		const deviceName = this.getDeviceName(userAgent);

		const tokens = await this.tokenService.generateTokens(user.id, String(user?.primaryEmail.value));
		const session = await this.tokenService.storeRefreshToken(
			user.id,
			tokens.refreshToken,
			res.req.cookies?.session_id,
			{ deviceName, ipAddress, userAgent },
		);

		res.cookie("session_id", session.id, {
			maxAge: TIME_LIFE_SESSION,
		});

		const cookieOptions: CookieOptions = {
			httpOnly: true,
			secure: false,
			sameSite: "lax",
			path: "/",
		};

		res.cookie("refresh_token", tokens.refreshToken, {
			...cookieOptions,
			maxAge: MAX_LIFE_REFRESH_TOKEN,
		}).cookie("access_token", tokens.accessToken, {
			...cookieOptions,
			maxAge: MAX_LIFE_ACCESS_TOKEN,
		});

		return { tokens, session };
	}

	async logout(res: Response, sessionId?: string) {
		res.clearCookie("access_token").clearCookie("refresh_token");

		const session = await this.prismaService.session.findFirst({
			where: { id: sessionId },
		});

		// Try to get sessionId from argument or cookies
		const sid = sessionId || res.req.cookies?.session_id;
		if (!sid) {
			throw new NotFoundException("Session ID is required for logout");
		}

		await this.prismaService.session.updateMany({
			where: { id: sid, userId: session?.userId },
			data: { refreshTokenHashed: null, revoked: true },
		});

		return {
			message: "Logout successful",
		};
	}

	async login(data: any, res: Response, req: Request) {
		const user = await this.prismaService.user.findFirst({
			where: { primaryEmail: { value: data.email } },
			omit: { hashedPassword: false },
			include: { primaryEmail: true },
		});

		if (!user) {
			throw new NotFoundException("User not found");
		}

		if (user.status === "BANNED") {
			throw new ForbiddenException("Your account is temporary being locked. Please try later");
		}

		const isMatch = await verify(user.hashedPassword, data.password);

		if (!isMatch) {
			throw new UnauthorizedException("Password is not matched");
		}

		if (user.status === "DEACTIVATED") {
			await this.prismaService.user.update({
				where: { id: user.id },
				data: { status: "ACTIVE" },
			});
		}

		const detailUser = this.getDataUser(req);

		// detect true if UserAgent is not elements in list session.UserAgent
		const isNew = await this.detectDevice(user.id, detailUser.ipAddress, detailUser.deviceName);

		// if detected new device , send email to user
		if (isNew) {
			await this.emailService.sendDetectOtherDevice(
				user.primaryEmail.value,
				detailUser.ipAddress,
				detailUser.userAgent,
				detailUser.deviceName,
			);
		}

		await this.createSession(user, res, req);

		const { hashedPassword, ...userWithoutPassword } = user;

		return {
			message: "Login successful",
			data: userWithoutPassword,
		};
	}

	async disableAccount(password: string, req: Request) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const user = await this.prismaService.user.findUnique({
			where: { id: req.user.id },
			omit: { hashedPassword: false },
		});

		if (!user) throw new Error("Conflict database");

		const isMatchPassword = await verify(user.hashedPassword, password);

		if (!isMatchPassword) {
			throw new UnauthorizedException("Password is not match");
		}

		const newUser = await this.prismaService.user.update({
			where: { id: user?.id },
			data: { status: "DEACTIVATED" },
		});

		const { hashedPassword, ...userWithoutPassword } = newUser;

		return {
			message: "Disable account successful",
			data: userWithoutPassword,
		};
	}
}

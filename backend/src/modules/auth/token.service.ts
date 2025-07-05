import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { randomInt, randomUUID } from 'crypto';
import { hash } from 'argon2'
import { PrismaService } from "@/prisma/prisma.service";
import { JwtPayload } from "./auth.interface";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
        private readonly prismaService: PrismaService
    ) { }

    async generateCode() {
        return randomInt(100000, 999999)
    }

    async generateTokens(userId: string, email: string) {
        const payload: JwtPayload = {
            sub: userId,
            email: email
        }

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>('JWT_SECRET'),
                expiresIn: this.configService.getOrThrow<string>('JWT_EXPIRES_IN')
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>('REFRESH_TOKEN_SECRET'),
                expiresIn: this.configService.getOrThrow<string>('REFRESH_TOKEN_TIME_LIFE')
            })
        ])

        return { accessToken, refreshToken }
    }

    async storeRefreshToken(userId: string, refreshToken: string, sessionId: string, options: { ipAddress: string, userAgent: string, deviceName: string }) {
        const hashedRefreshToken = await this.authService.hashing(refreshToken)

        const session = this.prismaService.session.upsert({
            where: { id: sessionId ?? "" },
            update: {
                lastLoginAt: new Date(),
                refreshTokenHashed: hashedRefreshToken,
                ...options
            },
            create: {
                id: sessionId,
                userId,
                refreshTokenHashed: hashedRefreshToken,
                ...options
            }
        })

        return session

        // let session = await this.prismaService.session.findFirst({ where: { userId } });
        // if (session) {
        //     session = await this.prismaService.session.update({
        //         where: { id: session.id },
        //         data: options
        //     });
        // } else {
        //     const newSessionId = randomUUID();
        //     session = await this.prismaService.session.create({
        //         data: {
        //             id: newSessionId,
        //             userId: userId,
        //             ...options
        //         }
        //     });
        // }

        // const hashedRefreshToken = await hash(refreshToken)
    }

    async refreshToken(refreshToken: string, userId: string) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            include: { primaryEmail: true }
        })

        if (!user) {
            throw new UnauthorizedException('User not found')
        }

        const payload = {
            sub: userId,
            email: user.primaryEmail.value
        }

        return {
            accessToken: this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>('JWT_SECRET'),
                expiresIn: this.configService.getOrThrow<string>('JWT_EXPIRES_IN')
            }),
            refreshToken: this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>('REFRESH_TOKEN_SECRET'),
                expiresIn: this.configService.getOrThrow<string>('REFRESH_TOKEN_TIME_LIFE')
            })
        }
    }

}
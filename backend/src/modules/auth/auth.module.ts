import { AuthCookieStrategy } from "@/common/strategies/auth-cookie.strategy";
import { EmailModule } from "@/email/email.module";
import { UsersModule } from "@/modules/users/users.module";
import { RedisModule } from "@/redis/redis.module";
import { Module, forwardRef } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LoginAttemptService } from "./loginAttempt.service";
import { TokenService } from "./token.service";

@Module({
	imports: [
		EmailModule,
		RedisModule,
		ConfigModule,
		UsersModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>("JWT_SECRET"),
				signOptions: { expiresIn: "1d" },
			}),
		}),
		forwardRef(() => AuthModule),
	],
	controllers: [AuthController],
	providers: [AuthService, TokenService, LoginAttemptService, AuthCookieStrategy],
	exports: [AuthService],
})
export class AuthModule {}

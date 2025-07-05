import { JwtStrategy } from '@/common/strategies/auth-cookie.strategy';
import { RedisModule } from '@/redis/redis.module';
import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoginAttemptService } from './loginAttempt.service';

@Module({
  imports: [
    EmailModule,RedisModule,ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenService, LoginAttemptService],
  exports: [AuthService],
})
export class AuthModule {}

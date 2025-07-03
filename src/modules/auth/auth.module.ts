import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmailStrategy } from './strategies/email.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [EmailModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, EmailStrategy],
})
export class AuthModule { }

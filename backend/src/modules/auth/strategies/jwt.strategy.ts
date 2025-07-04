import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Payload } from '../auth.interface';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          const token = req?.cookies?.['access_token'];
          if (!token) {
            return null;
          }
          return token;
        }
      ]),
      ignoreExpiration: false, // ✅ Kiểm tra token hết hạn
      secretOrKey: config.getOrThrow<string>('ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: Payload) {

    const user = await this.authService.findUserById(payload.userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return { 
      userId: payload.userId,
    };
  }
}
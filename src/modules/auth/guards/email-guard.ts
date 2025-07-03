// src/auth/guards/email-register.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { EmailStrategy } from '../strategies/email.strategy';

@Injectable()
export class EmailGuard implements CanActivate {
  constructor( private readonly emailStrategy: EmailStrategy ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { valuePrimaryEmail } = request.body;

    if (!valuePrimaryEmail ) throw new BadRequestException('Email is necessary');

    await this.emailStrategy.validate(valuePrimaryEmail);


    return true;
  }
}

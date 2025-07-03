import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUser } from './dto/register-auth.dto';
import { hash } from "argon2"
import { EmailService } from 'src/email/email.service';
import { TokenService } from './token.service';
import { ChangePassword } from './dto/change-pasword-auth.dto';

const MAXINUM_AVAILABLE_TIME = 5 * 60_000

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService
  ) { }

  private async hashingPassword(password: string): Promise<string> {
    return await hash(password)
  }

  private parseDate(input: string): Date {
    const [day, month, year] = input.split('/');
    const today = new Date()
    today.setDate(+day)
    today.setMonth(+month - 1) // 0 - 11
    today.setFullYear(+year)
    return new Date();
  }

  // generate profileId
  private generateProfileId(): string {
    const timestamp = Date.now();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${timestamp}${random}`;
  }

  async validate(email: string) {
    return await this.prisma.user.findFirst({
      where: {
        primaryEmail: {
          value: email
        }
      }
    })
  }

  // đăng kí cơ bản ban đầu là như này 
  async registerUser(data: RegisterUser) {

    const hashedPassword = await this.hashingPassword(data.password)

    const newUser = await this.prisma.user.create({
      data: {
        profileId: this.generateProfileId(),
        displayName: data.displayName,
        birthday: this.parseDate(data.dateOfBirth),
        gender: data.gender,
        primaryEmail: {
          create: {
            value: data.valuePrimaryEmail
          }
        },
        hashedPassword: hashedPassword
      }
    })

    this.emailService.sendVerificationRegisterEmail(data.valuePrimaryEmail, this.tokenService.generateJwtToken(data.valuePrimaryEmail))

    return {
      msg: 'Register successful',
      newUser,
      '@timestamp': new Date().toISOString(),
    }
  }

  // handle after register but account is available , using the token to change the password
  async handleAfterRegisterAvailableAccount(userId: string, token: string) {
    await this.prisma.code.upsert({
      where: { id: { type: "VERIFICATION", userId: userId } },
      update: {
        token: token,
        expiresAt: new Date(Date.now() + MAXINUM_AVAILABLE_TIME)
      },
      create: {
        type: "VERIFICATION",
        token: token,
        userId: userId,
        expiresAt: new Date(Date.now() + MAXINUM_AVAILABLE_TIME)
      }
    })
  }

  // change password with code 
  async changePasswordWithCode(data: ChangePassword) {
    const code = await this.prisma.code.findFirst({
      where: { userId: data.userId, type: "VERIFICATION" }
    })

    if (!code) {
      throw new NotFoundException('Code is not available or expired')
    }

    if (data.token !== code.token) {
      throw new ForbiddenException('Code does not matched')
    }

    const user = await this.prisma.user.update({
      where: { id: data.userId },
      data: {
        hashedPassword: await this.hashingPassword(data.newPassword),
        code: { delete: { id: { type: "VERIFICATION", userId: data.userId } } }
      }
    })

    await this.emailService.sendNotificationResetPassword(data.email)

    return {
      message: 'Change password successful',
      '@timestamp': new Date().toISOString()
    }
  }

}

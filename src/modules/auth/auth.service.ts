import { PrismaService } from '@/prisma/prisma.service';
import { Snowflake } from '@/utils/snowflake';
import { ConflictException, Injectable } from '@nestjs/common';
import { argon2id, hash } from "argon2";
import { EmailService } from 'src/email/email.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RegisterUser } from './dto/register-auth.dto';

// const MAXINUM_AVAILABLE_TIME = 5 * 60_000

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
  ) { }

  private async hashingPassword(password: string): Promise<string> {
    return await hash(password,
      {
        type: argon2id,
        memoryCost: 2 ** 16, // 64 MB RAM (65536 KiB)
        timeCost: 3, // 3 vòng lặp
        parallelism: 1, // 1 luồng (hoặc 2 nếu server nhiều core)
        hashLength: 32, // độ dài chuỗi hash
      }
    )
  }

  async validate(email: string) {
    return await this.prismaService.user.findFirst({
      where: {
        primaryEmail: {
          value: email
        }
      }
    })
  }

  async registerUser(body: RegisterUser) {
    const user = await this.prismaService.email.findFirst({ where: { value: body.email, NOT: { primaryEmailUser: null } } })

    if (user) {
      throw new ConflictException("This email has been registered")
    }

    const hashedPassword = await this.hashingPassword(body.password)
    const snowflake = new Snowflake()

    const newUser = await this.prismaService.user.create({
      data: {
        profileId: snowflake.generate(),
        displayName: body.displayName,
        birthday: body.birthday,
        gender: body.gender,
        primaryEmail: {
          create: {
            value: body.email
          }
        },
        hashedPassword: hashedPassword
      }
    })

    return {
      message: 'Register successful',
      data: newUser,
    }
  }

  async changePassword(body: ChangePasswordDto) {
    // kiểm tra pass cũ

    // lưu pass cũ vào redis

    // hash pass mới

    // đổi trong database

    return
  }

  async recoveryAccount(email: string) {
  // kiểm tra user

    // tạo code và gửi qua email

    // set thời gian gửi
  }

  async confirmRecoveryAccount(email: string, code: string) {
    // kiểm tra user và kiểm tra trước đó đã được gửi chưa

    // kiểm tra code và expires

    // gửi token tạm thời cho phép quyền đổi mật khẩu

    // xóa table lưu trạng thái recovery

    return
  }

  // // handle after register but account is available , using the token to change the password
  // async handleAfterRegisterAvailableAccount(userId: string, token: string) {
  //   await this.prismaService.code.upsert({
  //     where: { id: { type: "VERIFICATION", userId: userId } },
  //     update: {
  //       token: token,
  //       expiresAt: new Date(Date.now() + MAXINUM_AVAILABLE_TIME)
  //     },
  //     create: {
  //       type: "VERIFICATION",
  //       token: token,
  //       userId: userId,
  //       expiresAt: new Date(Date.now() + MAXINUM_AVAILABLE_TIME)
  //     }
  //   })
  // }

  // // change password with code
  // async changePasswordWithCode(data: ChangePassword) {
  //   const code = await this.prismaService.code.findFirst({
  //     where: { userId: data.userId, type: "VERIFICATION" }
  //   })

  //   if (!code) {
  //     throw new NotFoundException('Code is not available or expired')
  //   }

  //   if (data.token !== code.token) {
  //     throw new ForbiddenException('Code does not matched')
  //   }

  //   await this.prismaService.user.update({
  //     where: { id: data.userId },
  //     data: {
  //       hashedPassword: await this.hashingPassword(data.newPassword),
  //       code: { delete: { id: { type: "VERIFICATION", userId: data.userId } } }
  //     }
  //   })

  //   await this.emailService.sendNotificationResetPassword(data.email)

  //   return {
  //     message: 'Change password successful',
  //     '@timestamp': new Date().toISOString()
  //   }
  // }
}

import { PrismaService } from '@/prisma/prisma.service';
import { Snowflake } from '@/utils/snowflake';
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { argon2id, hash } from "argon2";
import { EmailService } from 'src/email/email.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RegisterUser } from './dto/register-auth.dto';
import { TokenService } from './token.service';
import { Session, User } from 'prisma/generated';
import { Response } from 'express'
import { randomUUID } from 'node:crypto';
import { CookieOptions } from 'express';
import { ConfigService } from '@nestjs/config';
import { verify } from 'argon2'
import { Request } from 'express';
import { UAParser } from 'ua-parser-js';
const MAXINUM_AVAILABLE_TIME = 5 * 60_000
const MIN_TIME_TO_REQUEST = 60_000

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
    private readonly configService: ConfigService
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
        primaryEmail: { value: email }
      }
    })
  }


  async findUserById(id: string) {
    return await this.prismaService.user.findFirst({
      where: { id: id }
    })
  }

  // get ip user
  private extractIp(req: Request): string {
    const xForwardedFor = req.headers['x-forwarded-for'] as string;
    return xForwardedFor?.split(',')[0] || req.socket.remoteAddress || '';
  }

  // get user agent
  private getDeviceName(userAgent: string): string {
    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser().name || 'Unknown browser';
    const os = parser.getOS().name || 'Unknown OS';
    return `${browser} on ${os}`;
  }

  async detectDevice(userId: string, ip: string, deviceName: string) {
    const lastSession = await this.prismaService.session.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!lastSession) return true;

    return lastSession.deviceName !== deviceName || lastSession.ipAddress !== ip;
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
    const exitingUser = await this.validate(email)

    if (!exitingUser) {
      throw new NotFoundException('User is not found')
    }

    const token = this.tokenService.generateCode()

    const user = await this.prismaService.user.update({
      where: { id: exitingUser.id },
      data: {
        status: "RECOVERY",
        createdAt: new Date()
      }
    })

    // update code
    await this.prismaService.code.upsert({
      where: { id: { type: "VERIFICATION", userId: user.id } },
      update: {
        token: String(token),
        expiresAt: new Date(Date.now() + MAXINUM_AVAILABLE_TIME)
      },
      create: {
        type: "VERIFICATION",
        token: String(token),
        userId: user.id,
        expiresAt: new Date(Date.now() + MAXINUM_AVAILABLE_TIME)
      }
    })

    await this.emailService.sendResetPasswordAccount(email, String(token))

    return {
      message: 'Send recovery email successful'
    }
  }

  async confirmRecoveryAccount(email: string, code: string, newPassword: string) {
    const exitingUser = await this.prismaService.code.findFirst({
      where: { token: code }
    })

    if (exitingUser && exitingUser?.createdAt.getTime() + MIN_TIME_TO_REQUEST > Date.now()) {
      throw new ConflictException('Please wait 1 minutes before requesting again')
    }

    if (exitingUser?.token !== code || exitingUser.createdAt.getTime() + MAXINUM_AVAILABLE_TIME > Date.now()) {
      throw new UnauthorizedException('Code is not matched or expired')
    }

    await this.prismaService.user.update({
      where: { id: exitingUser.userId },
      data: {
        hashedPassword: await this.hashingPassword(newPassword),
        code: { delete: { id: { type: "VERIFICATION", userId: exitingUser.userId } } }
      }
    })

    this.emailService.sendNotificationResetPassword(email)

    return {
      message: 'Send notification recovery email successful'
    }
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


  async createSession(userId: string, res: Response, req: Request) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
      include: {
        primaryEmail: true
      }
    })

    const ip = this.extractIp(req) // ip user
    const userAgent = req.headers['user-agent'] || 'Unknown'// user agent
    const deviceName = this.getDeviceName(userAgent)

    const tokens = await this.tokenService.generateTokens(userId, String(user?.primaryEmail.value))

    const sessionId = res.req.cookies?.session_id
    let session: Session
    if (sessionId) {
      const existingSession = await this.prismaService.session.findUnique({ where: { id: sessionId } })
      if (existingSession) {
        session = existingSession
      } else {
        const newSessionId = randomUUID()
        session = await this.prismaService.session.create({
          data: {
            id: newSessionId,
            userId: userId,
            ipAddress: ip,
            userAgent,
            deviceName
          }
        })
      }
    } else {
      const newSessionId = randomUUID()
      session = await this.prismaService.session.create({
        data: {
          id: newSessionId,
          userId: userId,
          ipAddress: ip,
          userAgent,
          deviceName
        }
      })
    }

    res.cookie('session_id', session.id, {
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000 // 10 years
    })

    await this.tokenService.storeRefreshToken(userId, tokens.refreshToken, sessionId)

    const cookieOptions: CookieOptions = {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
    }
    res
      .cookie('refresh_token', tokens.refreshToken, {
        ...cookieOptions,
        maxAge: 60 * 60 * 1000, // 1h in milliseconds
      })
      .cookie('access_token', tokens.accessToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      })

    return { tokens, session }
  }

  async login(data: any, res: Response, req: Request) {
    const user = await this.prismaService.user.findFirst({
      where: { primaryEmail: { value: data.email } },
      omit: { hashedPassword: false },
      include: { primaryEmail: true }
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const isMatch = await verify(user.hashedPassword, data.password)

    if (!isMatch) {
      throw new UnauthorizedException('Password is not matched')
    }

    const ip = this.extractIp(req) // ip user
    const userAgent = req.headers['user-agent'] || 'Unknown'// user agent
    const deviceName = this.getDeviceName(userAgent)

    const isNew = await this.detectDevice(user.id, ip, deviceName);

    if (isNew) {
      await this.emailService.sendDetectOtherDevice(user.primaryEmail.value, ip, userAgent, deviceName)
    }

    const session = await this.createSession(user.id, res, req)

    const { hashedPassword, ...userWithoutPassword } = user

    return {
      message: 'Login successful',
      data: userWithoutPassword
    }
  }

  async logout(res: Response, sessionId?: string) {

    res.clearCookie("access_token").clearCookie("refresh_token")

    const session = await this.prismaService.session.findFirst({
      where: { id: sessionId }
    })

    // Try to get sessionId from argument or cookies
    const sid = sessionId || res.req.cookies?.session_id;
    if (!sid) {
      throw new NotFoundException('Session ID is required for logout');
    }

    await this.prismaService.session.updateMany({
      where: { id: sid, userId: session?.userId },
      data: { refreshTokenHashed: null, revoked: true }
    });

    return {
      message: 'Logout successful'
    }
  }

  

}

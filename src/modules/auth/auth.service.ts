import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUser } from './dto/register-auth.dto';
import { hash } from "argon2"
import { EmailService } from 'src/email/email.service';
import { TokenService } from './token.service';

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

    this.emailService.sendVerificationRegisterEmail(data.valuePrimaryEmail,this.tokenService.generateJwtToken(data.valuePrimaryEmail))

    return {
      msg: 'Register successful',
      newUser,
      '@timestamp': new Date().toISOString(),
    }
  }

}

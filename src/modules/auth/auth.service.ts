import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUser } from './dto/register-auth.dto';
import { hash } from "argon2"

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService
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

  // đăng kí cơ bản ban đầu là như này 
  async registerUser(data: RegisterUser) {

    const hashedPassword = await this.hashingPassword(data.password)

    const primaryEmail = await this.prisma.email.create({
      data: { value: data.primaryEmail }
    })

    const newUser = await this.prisma.user.create({
      data: {
        displayName: data.displayName,
        dateOfBirth: this.parseDate(data.dateOfBirth),
        gender: data.gender,
        primaryEmail: primaryEmail.value,
        password: hashedPassword
      }
    })

    return {
      msg: 'Register successful',
      newUser,
      '@timestamp': new Date().toISOString(),
    }
  }

  // đăng kí cơ bản ban đầu là như này 
  async registerUser(data: RegisterUser) {

    const hashedPassword = await this.hashingPassword(data.password)

    const primaryEmail = await this.prisma.email.create({
      data: { value: data.primaryEmail }
    })

    const newUser = await this.prisma.user.create({
      data: {
        displayName: data.displayName,
        dateOfBirth: this.parseDate(data.dateOfBirth),
        gender: data.gender,
        primaryEmail: primaryEmail.value,
        password: hashedPassword
      }
    })

    return {
      msg: 'Register successful',
      newUser,
      '@timestamp': new Date().toISOString(),
    }
  }

}

import { Body, Controller, Get, Patch, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterUser } from './dto/register-auth.dto';
import { EmailGuard } from './guards/email-guard';
import { ChangePassword } from './dto/change-pasword-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService
  ) {}

  @UseGuards(EmailGuard)
  @Post('register')
  async registerUser(@Body()data: RegisterUser){
    return this.authService.registerUser(data)
  }

  @Patch("change-password")
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Body() data: ChangePasswordDto) {
    return this.authService.changePassword(data)
  }

  async recoveryAccount(@Query("email") email: string) {
    return this.authService.recoveryAccount(email)
  }

  // @Patch('changePasswordWithCode')
  // async changePasswordWithCode(@Body()data: ChangePassword){
  //   return await this.authService.changePasswordWithCode(data)
  // }
}

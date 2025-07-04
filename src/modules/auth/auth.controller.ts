import { Body, Controller, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RegisterUser } from './dto/register-auth.dto';
import { LoginAuth } from './dto/login-auth.dto';
import { Response } from 'express'
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService
  ) {}


  @Post('register')
  async registerUser(@Body()data: RegisterUser){
    return this.authService.registerUser(data)
  }

  @Patch("change-password")
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Body() data: ChangePasswordDto) {
    return this.authService.changePassword(data)
  }

  @Post("login")
  async login(@Body()data: LoginAuth,res: Response){
    return this.authService.login(data,res)
  }

  async recoveryAccount(@Query("email") email: string) {
    return this.authService.recoveryAccount(email)
  }

  // @Patch('changePasswordWithCode')
  // async changePasswordWithCode(@Body()data: ChangePassword){
  //   return await this.authService.changePasswordWithCode(data)
  // }
}

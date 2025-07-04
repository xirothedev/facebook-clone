import { Body, Controller, Delete, Get, Patch, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { LoginAuth } from './dto/login-auth.dto';
import { RegisterUser } from './dto/register-auth.dto';
import { Cookies } from './decorators/cookie.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService
  ) {}


  @Post('register')
  async registerUser(@Body() data: RegisterUser){
    return this.authService.registerUser(data)
  }

  @Patch("change-password")
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Body() data: ChangePasswordDto) {
    return this.authService.changePassword(data)
  }

  @Post("login")
  async login(@Body() data: LoginAuth, @Res() res: Response, @Req() req: Request) {
    const result = await this.authService.login(data, res, req);
    return res.json(result); // Đảm bảo trả response về cho client
  }

  @Get("recovery-account")
  async recoveryAccount(@Query("email") email: string) {
    return this.authService.recoveryAccount(email)
  }

  @Delete("logout")
  async logout( @Res({ passthrough: true }) res: Response, @Cookies('session_id') sessionId?: string){
    return this.authService.logout(res,sessionId)
  }

  // test
  @Get('getList')
  async getList(){
    return await this.prismaService.user.findMany()
  }
}

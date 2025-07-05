import { Cookies } from '@/common/decorators/cookie.decorator';
import { Body, Controller, Delete, Get, Patch, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { ChangePasswordDto, ForgotPasswordDto } from './dto/change-password.dto';
import { LoginAuth } from './dto/login-auth.dto';
import { RegisterUser } from './dto/register-auth.dto';
import { AuthCookieGuard } from '@/common/guards/auth-cookie.guard';
import { TokenService } from './token.service';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
    private readonly tokenService: TokenService
  ) { }

  @Post('register')
  async registerUser(@Body() data: RegisterUser) {
    return this.authService.registerUser(data)
  }

  @Patch("change-password")
  @UseGuards(AuthCookieGuard)
  async changePassword(@Body() data: ChangePasswordDto, @Req() req: Request) {
    return this.authService.changePassword(data, req)
  }

  @Post("refresh-token")
  @UseGuards(AuthCookieGuard)
  async refreshToken(req: Request, @Body('refreshToken') refreshToken: string) {
    return this.tokenService.refreshToken(req,refreshToken)
  }

  @Post("login")
  async login(@Body() data: LoginAuth, @Res() res: Response, @Req() req: Request) {
    const result = await this.authService.login(data, res, req);
    return res.json(result);
  }

  @Delete("logout")
  async logout(@Res({ passthrough: true }) res: Response, @Cookies('session_id') sessionId?: string) {
    return this.authService.logout(res, sessionId)
  }

  @Get('forgot-password')
  async forgotPassword(@Query("email") email: string) {
    return this.authService.forgotPassword(email)
  }

  @Patch('verify-token-forgot-password')
  async verifyTokenForgotPassword(@Body() data: ForgotPasswordDto) {
    return this.authService.verifyTokenForgotPassword(data)
  }

  @Post('disable-account')
  @UseGuards(AuthCookieGuard)
  async disableAccount(@Body('password') password: string, @Req() req: Request) {
    return this.authService.disableAccount(password,req)
  }

  // test
  @Get('getList')
  async getList() {
    return await this.prismaService.user.findMany()
  }
}

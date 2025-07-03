<<<<<<< HEAD
import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';
=======
import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/register-auth.dto';
>>>>>>> 3e6d858 (feat: update Prisma schema to use UUID for user and email identifiers)

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


<<<<<<< HEAD
  @Post('login')
  async login(@Req() req, @Res() res) {
  // const token = this.authService.login(req.user);
  // res.cookie('access_token', token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === 'production',
  //   sameSite: 'lax',
  //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
  // });
  // return res.json({ message: 'Login successful' });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
=======
>>>>>>> 3e6d858 (feat: update Prisma schema to use UUID for user and email identifiers)
}

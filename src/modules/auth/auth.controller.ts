import { Body, Controller, Get, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterUser } from './dto/register-auth.dto';
import { EmailGuard } from './guards/email-guard';
import { ChangePassword } from './dto/change-pasword-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService
  ) {}

  @UseGuards(EmailGuard)
  @Post('registerUser')
  async registerUser(@Body()data: RegisterUser){
    return await this.authService.registerUser(data)
  }

  @Patch('changePasswordWithCode')
  async changePasswordWithCode(@Body()data: ChangePassword){
    return await this.authService.changePasswordWithCode(data)
  }

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


  // test 
  @Get('test')
  async getList(){
    return await this.prisma.user.findMany()
  }
}

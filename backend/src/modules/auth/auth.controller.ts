import { Cookies } from "@/common/decorators/cookie.decorator";
import { Public } from "@/common/decorators/public.decorator";
import { AuthCookieGuard } from "@/common/guards/auth-cookie.guard";
import { PrismaService } from "@/prisma/prisma.service";
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Patch,
	Post,
	Query,
	Req,
	Res,
	UseGuards,
} from "@nestjs/common";
import type { Request, Response } from "express";
import { AuthService } from "./auth.service";
import type { ChangePasswordDto, ForgotPasswordDto } from "./dto/change-password.dto";
import type { LoginAuth } from "./dto/login-auth.dto";
import type { RegisterUser } from "./dto/register-auth.dto";
import { TokenService } from "./token.service";

@Controller("auth")
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly prismaService: PrismaService,
		private readonly tokenService: TokenService,
	) {}

	@Public()
	@Post("register")
	async registerUser(@Body() data: RegisterUser) {
		return this.authService.registerUser(data);
	}

	@Patch("change-password")
	@UseGuards(AuthCookieGuard)
	async changePassword(@Body() data: ChangePasswordDto, @Req() req: Request) {
		return this.authService.changePassword(data, req);
	}

	@Public()
	@Post("refresh-token")
	@UseGuards(AuthCookieGuard)
	async refreshToken(req: Request, @Body("refreshToken") refreshToken: string) {
		return this.tokenService.refreshToken(req, refreshToken);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Post("login")
	async login(@Body() data: LoginAuth, @Res() res: Response, @Req() req: Request) {
		const result = await this.authService.login(data, res, req);
		return res.json(result);
	}

	@Delete("logout")
	async logout(@Res({ passthrough: true }) res: Response, @Cookies("session_id") sessionId?: string) {
		return this.authService.logout(res, sessionId);
	}

	@Public()
	@Get("forgot-password")
	@HttpCode(HttpStatus.NO_CONTENT)
	async forgotPassword(@Query("email") email: string) {
		return this.authService.forgotPassword(email);
	}

	@Public()
	@Patch("verify-token-forgot-password")
	async verifyTokenForgotPassword(@Body() data: ForgotPasswordDto) {
		return this.authService.verifyTokenForgotPassword(data);
	}

	@Post("disable-account")
	@UseGuards(AuthCookieGuard)
	async disableAccount(@Body("password") password: string, @Req() req: Request) {
		return this.authService.disableAccount(password, req);
	}

	// test
	@Public()
	@Get("getList")
	async getList() {
		return await this.prismaService.user.findMany();
	}
}

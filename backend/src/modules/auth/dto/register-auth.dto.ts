import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { Gender } from "prisma/generated";
export class RegisterUser {
	@IsEmail()
	email: string;

	@IsString()
	@IsNotEmpty()
	displayName: string;

	@IsNotEmpty()
	@IsStrongPassword()
	password: string;

	@IsNotEmpty()
	@IsDateString()
	birthday: string;

	@IsEnum(Gender)
	@IsNotEmpty()
	gender: Gender;
}

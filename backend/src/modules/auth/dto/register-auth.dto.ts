import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { Transform } from "class-transformer";
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
	@Transform(({ value }) => {
		// Convert DD/MM/YYYY to YYYY-MM-DD format
		if (typeof value === "string" && value.includes("/")) {
			const [day, month, year] = value.split("/");
			return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
		}
		return value;
	})
	birthday: string;

	@IsEnum(Gender)
	@IsNotEmpty()
	gender: Gender;
}

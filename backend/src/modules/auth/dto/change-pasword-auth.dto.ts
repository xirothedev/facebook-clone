import { IsNotEmpty, IsStrongPassword } from "class-validator";

export class ChangePassword {
	@IsNotEmpty({ message: "Userid is not empty" })
	userId: string;
	@IsNotEmpty({ message: "Token is not empty" })
	token: string;
	@IsNotEmpty({ message: "Email is not empty " })
	email: string;
	@IsNotEmpty({ message: "Password is not empty" })
	@IsStrongPassword(
		{
			minLength: 8,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		},
		{ message: "Password is not accepted" },
	)
	newPassword: string;
}

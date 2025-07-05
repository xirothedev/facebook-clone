import { IsNotEmpty, IsStrongPassword } from "class-validator";

export class ChangePasswordDto {
  @IsStrongPassword()
  @IsNotEmpty()
  oldPassword: string

  @IsStrongPassword()
  @IsNotEmpty()
  newPassword: string
}

export class ForgotPasswordDto extends ChangePasswordDto {
  userId: string
  token: string
  email: string
}


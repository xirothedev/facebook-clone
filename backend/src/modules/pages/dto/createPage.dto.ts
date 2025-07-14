import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePageDto {
	@IsNotEmpty({ message: "Name is require" })
	name: string;
	@IsNotEmpty({ message: "Category is require" })
	categories: string;
	@IsOptional()
	bio: string;
	@IsNotEmpty()
	phoneNumber: string;
}

import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePageDto {
	@IsNotEmpty({ message: "Name is require" })
	name: string;
	@IsNotEmpty({ message: "Category is require" })
	category: string;
	@IsOptional()
	bio: string;
	@IsNotEmpty({ message: "Link is not empty" })
	websiteUrl: string;
	@IsNotEmpty()
	phoneNumber: string;
}

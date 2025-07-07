import { Optional } from "@nestjs/common";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { type Post, Scope } from "prisma/generated";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto implements Partial<Omit<Post, "medias">> {
	@ApiPropertyOptional({ type: String, description: "The content of the post." })
	@IsString()
	@Optional()
	content?: string;

	@ApiProperty({ enum: Scope, description: "The visibility scope of the post." })
	@IsEnum(Scope)
	@IsNotEmpty()
	scope: Scope;

	@ApiProperty({
		type: "string",
		format: "binary",
		isArray: true,
		description: "List of media files to be attached to the post.",
	})
	// @IsNotEmpty({ message: "Media files are required", each: true })
	medias: Express.Multer.File[];
}

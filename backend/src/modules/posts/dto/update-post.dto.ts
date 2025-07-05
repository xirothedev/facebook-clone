import { IsEnum, IsOptional, IsString, IsArray } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Scope } from 'prisma/generated';

export class UpdatePostDto {
  @ApiPropertyOptional({ type: String, description: 'The content of the post.' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({ enum: Scope, description: 'The visibility scope of the post.' })
  @IsEnum(Scope)
  @IsOptional()
  scope?: Scope;

  @ApiPropertyOptional({
    type: [String],
    description: 'Array of existing media URLs to be removed from the post.'
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  deletedUrls?: string[];

  // medias are not included here; handled via file upload endpoints
}

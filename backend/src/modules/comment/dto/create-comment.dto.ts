import { Comment } from "prisma/generated";
import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCommentDto implements Partial<Comment> {
  @ApiPropertyOptional({ description: 'The ID of the parent comment (for replies)', example: 'cmt_12345' })
  @IsOptional()
  @IsString()
  parentId?: string;

  @ApiProperty({ description: 'The ID of the post this comment belongs to', example: 'post_67890' })
  @IsString()
  @IsNotEmpty()
  postId: string;

  @ApiProperty({ description: 'The content of the comment', example: 'This is a comment.' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 1000)
  content: string;
}

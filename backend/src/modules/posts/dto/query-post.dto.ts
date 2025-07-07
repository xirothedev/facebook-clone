import { IsOptional, IsString, IsEnum, IsNumber, Min, Max } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Scope } from 'prisma/generated';

export class QueryPostDto {
  @ApiPropertyOptional({ description: 'Page number for pagination', minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Number of items per page', minimum: 1, maximum: 100 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @ApiPropertyOptional({ description: 'Search term to filter posts by content' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: Scope, description: 'Filter posts by scope' })
  @IsOptional()
  @IsEnum(Scope)
  scope?: Scope;

  @ApiPropertyOptional({ description: 'Filter posts by author ID' })
  @IsOptional()
  @IsString()
  authorId?: string;

  @ApiPropertyOptional({ description: 'Sort by field', enum: ['createdAt', 'updateAt'] })
  @IsOptional()
  @IsString()
  sortBy?: 'createdAt' | 'updateAt' = 'createdAt';

  @ApiPropertyOptional({ description: 'Sort order', enum: ['asc', 'desc'] })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.toLowerCase())
  sortOrder?: 'asc' | 'desc' = 'desc';
} 
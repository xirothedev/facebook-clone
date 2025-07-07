import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, Max, Min } from "class-validator";
import { NotificationStatus, NotificationType } from "prisma/generated";

export class FindAllNotificationsDto {
	@ApiPropertyOptional({
		description: "Filter by notification status",
		enum: NotificationStatus,
		example: NotificationStatus.UNREAD,
	})
	@IsOptional()
	@IsEnum(NotificationStatus)
	status?: NotificationStatus;

	@ApiPropertyOptional({
		description: "Filter by notification type",
		example: "POST_LIKE",
	})
	@IsOptional()
	@IsEnum(NotificationType)
	type?: NotificationType;

	@ApiPropertyOptional({
		description: "Number of notifications to return (max 100)",
		minimum: 1,
		maximum: 100,
		default: 50,
		example: 20,
	})
	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@Max(100)
	@Transform(({ value }) => parseInt(value))
	limit?: number = 50;

	@ApiPropertyOptional({
		description: "Number of notifications to skip for pagination",
		minimum: 0,
		default: 0,
		example: 0,
	})
	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(0)
	@Transform(({ value }) => parseInt(value))
	skip?: number = 0;
}

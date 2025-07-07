import { IsBoolean, IsEnum, IsNumber, IsObject, IsOptional, IsString, IsUUID, IsUrl } from "class-validator";
import { NotificationPriority, NotificationStatus, NotificationType } from "prisma/generated";

export class CreateNotificationDto {
	@IsUUID()
	recipientId: string;

	@IsOptional()
	@IsUUID()
	actorId?: string;

	@IsEnum(NotificationType)
	type: NotificationType;

	@IsString()
	title: string;

	@IsString()
	message: string;

	@IsOptional()
	@IsEnum(NotificationStatus)
	status?: NotificationStatus = NotificationStatus.UNREAD;

	@IsOptional()
	@IsEnum(NotificationPriority)
	priority?: NotificationPriority = NotificationPriority.NORMAL;

	@IsOptional()
	@IsString()
	postId?: string;

	@IsOptional()
	@IsString()
	commentId?: string;

	@IsOptional()
	@IsString()
	reactionId?: string;

	@IsOptional()
	@IsString()
	friendRequestId?: string;

	@IsOptional()
	@IsUrl()
	imageUrl?: string;

	@IsOptional()
	@IsUrl()
	actionUrl?: string;

	@IsOptional()
	@IsObject()
	metadata?: any;

	@IsOptional()
	@IsString()
	groupId?: string;

	@IsOptional()
	@IsBoolean()
	isGrouped?: boolean = false;

	@IsOptional()
	@IsNumber()
	groupCount?: number = 1;
}

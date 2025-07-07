import { NotificationPriority, NotificationType } from "prisma/generated";
import { InputJsonValue } from "prisma/generated/runtime/library";

export interface NotificationData {
	recipientId: string;
	actorId?: string;
	type: NotificationType;
	title: string;
	message: string;
	priority?: NotificationPriority;
	postId?: string;
	commentId?: string;
	reactionId?: string;
	friendRequestId?: string;
	imageUrl?: string;
	actionUrl?: string;
	metadata?: InputJsonValue;
}

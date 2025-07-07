import { NotificationType, NotificationStatus, NotificationPriority } from "prisma/generated";

export class Notification {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	readAt?: Date;
	deletedAt?: Date;

	// Recipient of the notification
	recipientId: string;
	recipient?: any; // User relation

	// Actor who triggered the notification (can be null for system notifications)
	actorId?: string;
	actor?: any; // User relation

	// Notification type and content
	type: NotificationType;
	title: string;
	message: string;
	status: NotificationStatus;
	priority: NotificationPriority;

	// Related content references (optional)
	postId?: string;
	commentId?: string;
	reactionId?: string;
	friendRequestId?: string;

	// Additional data for rich notifications
	imageUrl?: string;
	actionUrl?: string;
	metadata?: any;

	// Grouping and aggregation
	groupId?: string;
	isGrouped: boolean;
	groupCount: number;
}

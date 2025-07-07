import { Injectable, Logger } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { NotificationEvent } from "../events/notification.events";
import { NotificationType, NotificationPriority } from "prisma/generated";
import { WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@Injectable()
export class NotificationEventEmitterService {
	@WebSocketServer()
	server: Server;

	private logger = new Logger(NotificationEventEmitterService.name);

	constructor(private readonly eventEmitter: EventEmitter2) {}

	emitNewNotification(userId: string, notification: any) {
		try {
			this.server.to(`user:${userId}`).emit("newNotification", notification);
			this.logger.log(`Emitted new notification to user ${userId}`);
		} catch (error) {
			this.logger.error(`Error emitting new notification: ${error.message}`);
		}
	}

	emitNotificationUpdate(userId: string, notification: any) {
		try {
			this.server.to(`user:${userId}`).emit("notificationUpdate", notification);
			this.logger.log(`Emitted notification update to user ${userId}`);
		} catch (error) {
			this.logger.error(`Error emitting notification update: ${error.message}`);
		}
	}

	emitUnreadCountUpdate(userId: string, unreadCount: number) {
		try {
			this.server.to(`user:${userId}`).emit("unreadCount", unreadCount);
			this.logger.log(`Emitted unread count update to user ${userId}: ${unreadCount}`);
		} catch (error) {
			this.logger.error(`Error emitting unread count update: ${error.message}`);
		}
	}

	async emitNotificationEvent(event: NotificationEvent): Promise<void> {
		this.eventEmitter.emit("notification.created", event);
	}

	async emitMultipleNotificationEvents(events: NotificationEvent[]): Promise<void> {
		for (const event of events) {
			await this.emitNotificationEvent(event);
		}
	}

	async emitPostLikeNotification(
		recipientId: string,
		actorId: string,
		postId: string,
		actorName: string,
		postTitle?: string,
	): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			actorId,
			type: NotificationType.POST_LIKE,
			title: `${actorName} liked your post`,
			message: postTitle ? `${actorName} liked your post "${postTitle}"` : `${actorName} liked your post`,
			priority: NotificationPriority.NORMAL,
			postId,
			actionUrl: `/posts/${postId}`,
			metadata: {
				actorName,
				postTitle,
				reactionType: "like",
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitPostCommentNotification(
		recipientId: string,
		actorId: string,
		postId: string,
		commentId: string,
		actorName: string,
		commentPreview: string,
		postTitle?: string,
	): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			actorId,
			type: NotificationType.POST_COMMENT,
			title: `${actorName} commented on your post`,
			message: postTitle
				? `${actorName} commented on your post "${postTitle}": "${commentPreview}"`
				: `${actorName} commented: "${commentPreview}"`,
			priority: NotificationPriority.NORMAL,
			postId,
			commentId,
			actionUrl: `/posts/${postId}#comment-${commentId}`,
			metadata: {
				actorName,
				commentPreview,
				postTitle,
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitFriendRequestNotification(
		recipientId: string,
		actorId: string,
		friendRequestId: string,
		actorName: string,
	): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			actorId,
			type: NotificationType.FRIEND_REQUEST,
			title: `${actorName} sent you a friend request`,
			message: `${actorName} wants to be your friend`,
			priority: NotificationPriority.HIGH,
			friendRequestId,
			actionUrl: `/friends/requests`,
			metadata: {
				actorName,
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitFriendRequestAcceptedNotification(
		recipientId: string,
		actorId: string,
		friendRequestId: string,
		actorName: string,
	): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			actorId,
			type: NotificationType.FRIEND_REQUEST_ACCEPTED,
			title: `${actorName} accepted your friend request`,
			message: `${actorName} accepted your friend request`,
			priority: NotificationPriority.NORMAL,
			friendRequestId,
			actionUrl: `/profile/${actorId}`,
			metadata: {
				actorName,
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitBirthdayReminderNotification(recipientId: string, friendName: string, friendId: string): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			type: NotificationType.BIRTHDAY_REMINDER,
			title: `${friendName} has a birthday today`,
			message: `Don't forget to wish ${friendName} a happy birthday!`,
			priority: NotificationPriority.HIGH,
			actionUrl: `/profile/${friendId}`,
			metadata: {
				friendName,
				friendId,
				isBirthday: true,
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitSecurityAlertNotification(recipientId: string, alertType: string, message: string): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			type: NotificationType.SECURITY_ALERT,
			title: `Security Alert: ${alertType}`,
			message,
			priority: NotificationPriority.URGENT,
			actionUrl: `/settings/security`,
			metadata: {
				alertType,
				timestamp: new Date().toISOString(),
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitCommentLikeNotification(
		recipientId: string,
		actorId: string,
		postId: string,
		commentId: string,
		actorName: string,
		commentPreview: string,
	): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			actorId,
			type: NotificationType.COMMENT_LIKE,
			title: `${actorName} liked your comment`,
			message: `${actorName} liked your comment: "${commentPreview}"`,
			priority: NotificationPriority.NORMAL,
			postId,
			commentId,
			actionUrl: `/posts/${postId}#comment-${commentId}`,
			metadata: {
				actorName,
				commentPreview,
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitCommentReplyNotification(
		recipientId: string,
		actorId: string,
		postId: string,
		commentId: string,
		actorName: string,
		replyPreview: string,
	): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			actorId,
			type: NotificationType.COMMENT_REPLY,
			title: `${actorName} replied to your comment`,
			message: `${actorName} replied: "${replyPreview}"`,
			priority: NotificationPriority.NORMAL,
			postId,
			commentId,
			actionUrl: `/posts/${postId}#comment-${commentId}`,
			metadata: {
				actorName,
				replyPreview,
			},
		};

		await this.emitNotificationEvent(event);
	}

	async emitPostShareNotification(
		recipientId: string,
		actorId: string,
		postId: string,
		actorName: string,
		postTitle?: string,
	): Promise<void> {
		const event: NotificationEvent = {
			recipientId,
			actorId,
			type: NotificationType.POST_SHARE,
			title: `${actorName} shared your post`,
			message: postTitle ? `${actorName} shared your post "${postTitle}"` : `${actorName} shared your post`,
			priority: NotificationPriority.NORMAL,
			postId,
			actionUrl: `/posts/${postId}`,
			metadata: {
				actorName,
				postTitle,
			},
		};

		await this.emitNotificationEvent(event);
	}
}

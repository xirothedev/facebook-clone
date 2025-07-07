import { Injectable, Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { type Notification, NotificationPriority, NotificationStatus } from "prisma/generated";
import type { PrismaService } from "@/prisma/prisma.service";
import type { NotificationEvent } from "../events/notification.events";
import type { NotificationsGateway } from "../notifications.gateway";

@Injectable()
export class NotificationEventListenerService {
	private readonly logger = new Logger(NotificationEventListenerService.name);

	constructor(
		private readonly prisma: PrismaService,
		private readonly notificationsGateway: NotificationsGateway,
	) {}

	@OnEvent("notification.created")
	async handleNotificationCreated(event: NotificationEvent): Promise<void> {
		try {
			this.logger.log(`Processing notification event: ${event.type} for user ${event.recipientId}`);

			// Check if user exists
			const recipient = await this.prisma.user.findUnique({
				where: { id: event.recipientId },
				select: { id: true, displayName: true },
			});

			if (!recipient) {
				this.logger.warn(`Recipient user ${event.recipientId} not found`);
				return;
			}

			// Check if actor exists (if provided)
			if (event.actorId) {
				const actor = await this.prisma.user.findUnique({
					where: { id: event.actorId },
					select: { id: true, displayName: true },
				});

				if (!actor) {
					this.logger.warn(`Actor user ${event.actorId} not found`);
					return;
				}
			}

			// Check for existing similar notifications to group them
			const existingNotification = await this.findSimilarNotification(event);

			if (existingNotification && this.shouldGroupNotifications(event, existingNotification)) {
				// Update existing notification to group them
				await this.updateNotificationGroup(existingNotification.id, event);
			} else {
				// Create new notification
				const notification = await this.createNotification(event);

				// Send real-time notification via WebSocket
				await this.sendRealTimeNotification(notification);
			}

			this.logger.log(`Successfully processed notification event: ${event.type}`);
		} catch (error) {
			this.logger.error(`Error processing notification event: ${error.message}`, error.stack);
		}
	}

	private async findSimilarNotification(event: NotificationEvent) {
		const timeWindow = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago

		return await this.prisma.notification.findFirst({
			where: {
				recipientId: event.recipientId,
				type: event.type,
				actorId: event.actorId,
				createdAt: {
					gte: timeWindow,
				},
				status: {
					not: NotificationStatus.DELETED,
				},
				isGrouped: false,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
	}

	private shouldGroupNotifications(newEvent: NotificationEvent, existingNotification: any): boolean {
		// Group notifications that are similar and within a time window
		const timeDiff = Date.now() - existingNotification.createdAt.getTime();
		const groupingTimeWindow = 30 * 60 * 1000; // 30 minutes

		return (
			timeDiff < groupingTimeWindow &&
			newEvent.type === existingNotification.type &&
			newEvent.actorId === existingNotification.actorId
		);
	}

	private async updateNotificationGroup(existingNotificationId: string, newEvent: NotificationEvent): Promise<void> {
		await this.prisma.notification.update({
			where: { id: existingNotificationId },
			data: {
				groupCount: {
					increment: 1,
				},
				isGrouped: true,
				updatedAt: new Date(),
				metadata: {
					...newEvent.metadata,
					groupedCount: {
						increment: 1,
					},
				},
			},
		});

		this.logger.log(`Grouped notification ${existingNotificationId} with new event ${newEvent.type}`);
	}

	private async createNotification(event: NotificationEvent) {
		const notificationData = {
			recipientId: event.recipientId,
			actorId: event.actorId,
			type: event.type,
			title: event.title,
			message: event.message,
			status: NotificationStatus.UNREAD,
			priority: event.priority || NotificationPriority.NORMAL,
			postId: this.extractPostId(event),
			commentId: this.extractCommentId(event),
			reactionId: this.extractReactionId(event),
			friendRequestId: this.extractFriendRequestId(event),
			imageUrl: event.metadata?.imageUrl,
			actionUrl: event.actionUrl,
			metadata: event.metadata,
			groupId: this.generateGroupId(event),
			isGrouped: false,
			groupCount: 1,
		};

		return await this.prisma.notification.create({
			data: notificationData,
			include: {
				recipient: {
					select: {
						id: true,
						displayName: true,
						username: true,
						avatarUrl: true,
					},
				},
				actor: {
					select: {
						id: true,
						displayName: true,
						username: true,
						avatarUrl: true,
					},
				},
			},
		});
	}

	private async sendRealTimeNotification(notification: Notification): Promise<void> {
		try {
			// Send to specific user's room
			this.notificationsGateway.server.to(`user:${notification.recipientId}`).emit("notification", {
				id: notification.id,
				type: notification.type,
				title: notification.title,
				message: notification.message,
				priority: notification.priority,
				createdAt: notification.createdAt,
				actor: notification.actorId,
				actionUrl: notification.actionUrl,
				metadata: notification.metadata,
				isGrouped: notification.isGrouped,
				groupCount: notification.groupCount,
			});

			this.logger.log(`Sent real-time notification to user ${notification.recipientId}`);
		} catch (error) {
			this.logger.error(`Error sending real-time notification: ${error.message}`);
		}
	}

	private extractPostId(event: NotificationEvent): string | undefined {
		if ("postId" in event) {
			return event.postId;
		}
		return undefined;
	}

	private extractCommentId(event: NotificationEvent): string | undefined {
		if ("commentId" in event) {
			return event.commentId;
		}
		return undefined;
	}

	private extractReactionId(event: NotificationEvent): string | undefined {
		if ("reactionId" in event) {
			return event.reactionId;
		}
		return undefined;
	}

	private extractFriendRequestId(event: NotificationEvent): string | undefined {
		if ("friendRequestId" in event) {
			return event.friendRequestId;
		}
		return undefined;
	}

	private generateGroupId(event: NotificationEvent): string {
		const base = `${event.recipientId}-${event.type}`;
		if (event.actorId) {
			return `${base}-${event.actorId}`;
		}
		return base;
	}
}

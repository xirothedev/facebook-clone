import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, Logger } from "@nestjs/common";
import { type Notification, NotificationPriority, NotificationStatus } from "prisma/generated";
import type { NotificationData } from "../notifications.interface";

@Injectable()
export class NotificationGroupingService {
	private readonly logger = new Logger(NotificationGroupingService.name);

	constructor(private readonly prisma: PrismaService) {}

	async createNotificationWithGrouping(notificationData: NotificationData): Promise<Notification> {
		try {
			// Check for existing similar notifications to group them
			const existingNotification = await this.findSimilarNotification(notificationData);

			if (existingNotification && this.shouldGroupNotifications(notificationData, existingNotification)) {
				// Update existing notification to group them
				return await this.updateNotificationGroup(existingNotification.id, notificationData);
			} else {
				// Create new notification
				return await this.createNewNotification(notificationData);
			}
		} catch (error) {
			this.logger.error(`Error creating notification with grouping: ${error.message}`);
			throw error;
		}
	}

	private async findSimilarNotification(notificationData: any): Promise<Notification | null> {
		const timeWindow = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago

		return await this.prisma.notification.findFirst({
			where: {
				recipientId: notificationData.recipientId,
				type: notificationData.type,
				actorId: notificationData.actorId,
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

	private shouldGroupNotifications(newNotification: any, existingNotification: Notification): boolean {
		// Group notifications that are similar and within a time window
		const timeDiff = Date.now() - existingNotification.createdAt.getTime();
		const groupingTimeWindow = 30 * 60 * 1000; // 30 minutes

		return (
			timeDiff < groupingTimeWindow &&
			newNotification.type === existingNotification.type &&
			newNotification.actorId === existingNotification.actorId
		);
	}

	private async updateNotificationGroup(
		existingNotificationId: string,
		newNotificationData: any,
	): Promise<Notification> {
		const updatedNotification = await this.prisma.notification.update({
			where: { id: existingNotificationId },
			data: {
				groupCount: {
					increment: 1,
				},
				isGrouped: true,
				updatedAt: new Date(),
				metadata: {
					...newNotificationData.metadata,
					groupedCount: {
						increment: 1,
					},
				},
			},
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

		this.logger.log(
			`Grouped notification ${existingNotificationId} with new notification ${newNotificationData.type}`,
		);
		return updatedNotification;
	}

	private async createNewNotification(notificationData: NotificationData): Promise<Notification> {
		const notification = await this.prisma.notification.create({
			data: {
				recipientId: notificationData.recipientId,
				actorId: notificationData.actorId,
				type: notificationData.type,
				title: notificationData.title,
				message: notificationData.message,
				status: NotificationStatus.UNREAD,
				priority: notificationData.priority || NotificationPriority.NORMAL,
				postId: notificationData.postId,
				commentId: notificationData.commentId,
				reactionId: notificationData.reactionId,
				friendRequestId: notificationData.friendRequestId,
				imageUrl: notificationData.imageUrl,
				actionUrl: notificationData.actionUrl,
				metadata: notificationData.metadata,
				groupId: this.generateGroupId(notificationData),
				isGrouped: false,
				groupCount: 1,
			},
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

		this.logger.log(`Created new notification ${notification.id} for user ${notification.recipientId}`);
		return notification;
	}

	private generateGroupId(notificationData: any): string {
		const base = `${notificationData.recipientId}-${notificationData.type}`;
		if (notificationData.actorId) {
			return `${base}-${notificationData.actorId}`;
		}
		return base;
	}

	async getGroupedNotifications(
		userId: string,
		options?: {
			limit?: number;
			offset?: number;
		},
	): Promise<Notification[]> {
		return await this.prisma.notification.findMany({
			where: {
				recipientId: userId,
				isGrouped: true,
				status: {
					not: NotificationStatus.DELETED,
				},
			},
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
			orderBy: {
				updatedAt: "desc",
			},
			take: options?.limit || 50,
			skip: options?.offset || 0,
		});
	}

	async ungroupNotification(notificationId: string, userId: string): Promise<Notification> {
		const notification = await this.prisma.notification.findFirst({
			where: {
				id: notificationId,
				recipientId: userId,
				isGrouped: true,
			},
		});

		if (!notification) {
			throw new Error("Grouped notification not found");
		}

		return await this.prisma.notification.update({
			where: { id: notificationId },
			data: {
				isGrouped: false,
				groupCount: 1,
				metadata: {
					...(notification.metadata as Record<string, any>),
					ungroupedAt: new Date().toISOString(),
				},
			},
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

	/**
	 * Get notification group statistics
	 */
	async getGroupingStats(userId: string): Promise<{
		totalGrouped: number;
		totalUngrouped: number;
		averageGroupSize: number;
	}> {
		const [groupedCount, ungroupedCount, averageGroupSize] = await Promise.all([
			this.prisma.notification.count({
				where: {
					recipientId: userId,
					isGrouped: true,
					status: {
						not: NotificationStatus.DELETED,
					},
				},
			}),
			this.prisma.notification.count({
				where: {
					recipientId: userId,
					isGrouped: false,
					status: {
						not: NotificationStatus.DELETED,
					},
				},
			}),
			this.prisma.notification.aggregate({
				where: {
					recipientId: userId,
					isGrouped: true,
					status: {
						not: NotificationStatus.DELETED,
					},
				},
				_avg: {
					groupCount: true,
				},
			}),
		]);

		return {
			totalGrouped: groupedCount,
			totalUngrouped: ungroupedCount,
			averageGroupSize: averageGroupSize._avg.groupCount || 0,
		};
	}
}

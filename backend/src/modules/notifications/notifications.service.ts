import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { NotificationStatus } from 'prisma/generated';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationGroupingService } from './services/notification-grouping.service';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationGroupingService: NotificationGroupingService,
    // @Inject(forwardRef(() => NotificationsGateway))
    private readonly notificationsGateway: NotificationsGateway
  ) { }

    async create(createNotificationDto: CreateNotificationDto) {
    try {
      // Use grouping service to create notification with grouping logic
      const notification = await this.notificationGroupingService.createNotificationWithGrouping({
        recipientId: createNotificationDto.recipientId,
        actorId: createNotificationDto.actorId,
        type: createNotificationDto.type,
        title: createNotificationDto.title,
        message: createNotificationDto.message,
        priority: createNotificationDto.priority,
        postId: createNotificationDto.postId,
        commentId: createNotificationDto.commentId,
        reactionId: createNotificationDto.reactionId,
        friendRequestId: createNotificationDto.friendRequestId,
        imageUrl: createNotificationDto.imageUrl,
        actionUrl: createNotificationDto.actionUrl,
        metadata: createNotificationDto.metadata
      });

      this.logger.log(`Created notification ${notification.id} for user ${notification.recipientId}`);

      const isOnline = await this.notificationsGateway.isUserOnline(notification.recipientId);
      
      if (isOnline) {
        // Emit real-time notification
        this.notificationsGateway.emitNewNotification(notification.recipientId, notification);
        
        // Update unread count
        const unreadCount = await this.getUnreadCount(notification.recipientId);
        this.notificationsGateway.emitUnreadCountUpdate(notification.recipientId, unreadCount);
      } else {
        this.logger.log(`User ${notification.recipientId} is offline, notification stored for later delivery`);
      }

      return notification;
    } catch (error) {
      this.logger.error(`Error creating notification: ${error.message}`);
      throw error;
    }
  }

  async findAll(userId?: string, options?: {
    status?: NotificationStatus;
    type?: string;
    limit?: number;
    offset?: number;
  }) {
    try {
      const where: any = {
        recipientId: userId,
        status: {
          not: NotificationStatus.DELETED
        }
      };

      if (options?.status) {
        where.status = options.status;
      }

      if (options?.type) {
        where.type = options.type;
      }

      const notifications = await this.prisma.notification.findMany({
        where,
        include: {
          recipient: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          },
          actor: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: options?.limit || 50,
        skip: options?.offset || 0
      });

      return notifications;
    } catch (error) {
      this.logger.error(`Error fetching notifications: ${error.message}`);
      throw error;
    }
  }

  async findOne(id: string, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const notification = await this.prisma.notification.findFirst({
        where: {
          id,
          recipientId: userId,
          status: {
            not: NotificationStatus.DELETED
          }
        },
        include: {
          recipient: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          },
          actor: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          }
        }
      });

      if (!notification) {
        throw new Error('Notification not found');
      }

      return notification;
    } catch (error) {
      this.logger.error(`Error fetching notification: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      // Verify ownership
      const existingNotification = await this.prisma.notification.findFirst({
        where: {
          id,
          recipientId: userId
        }
      });

      if (!existingNotification) {
        throw new Error('Notification not found or access denied');
      }

      const notification = await this.prisma.notification.update({
        where: { id },
        data: updateNotificationDto,
        include: {
          recipient: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          },
          actor: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          }
        }
      });

      this.logger.log(`Updated notification ${id}`);

      // Emit real-time update
      this.notificationsGateway.emitNotificationUpdate(notification.recipientId, notification);

      return notification;
    } catch (error) {
      this.logger.error(`Error updating notification: ${error.message}`);
      throw error;
    }
  }

  async markAsRead(id: string, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const notification = await this.prisma.notification.updateMany({
        where: {
          id,
          recipientId: userId,
          status: {
            not: NotificationStatus.DELETED
          }
        },
        data: {
          status: NotificationStatus.READ,
          readAt: new Date()
        }
      });

      if (notification.count === 0) {
        throw new Error('Notification not found or access denied');
      }

      this.logger.log(`Marked notification ${id} as read`);

      // Update unread count for the user
      const unreadCount = await this.getUnreadCount(userId);
      this.notificationsGateway.emitUnreadCountUpdate(userId, unreadCount);

      return { success: true };
    } catch (error) {
      this.logger.error(`Error marking notification as read: ${error.message}`);
      throw error;
    }
  }

  async markAllAsRead(userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const result = await this.prisma.notification.updateMany({
        where: {
          recipientId: userId,
          status: NotificationStatus.UNREAD
        },
        data: {
          status: NotificationStatus.READ,
          readAt: new Date()
        }
      });

      this.logger.log(`Marked ${result.count} notifications as read for user ${userId}`);

      // Update unread count for the user
      const unreadCount = await this.getUnreadCount(userId);
      this.notificationsGateway.emitUnreadCountUpdate(userId, unreadCount);

      return { success: true, count: result.count };
    } catch (error) {
      this.logger.error(`Error marking all notifications as read: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const notification = await this.prisma.notification.updateMany({
        where: {
          id,
          recipientId: userId
        },
        data: {
          status: NotificationStatus.DELETED,
          deletedAt: new Date()
        }
      });

      if (notification.count === 0) {
        throw new Error('Notification not found or access denied');
      }

      this.logger.log(`Deleted notification ${id}`);
      return { success: true };
    } catch (error) {
      this.logger.error(`Error deleting notification: ${error.message}`);
      throw error;
    }
  }

  public async getUnreadCount(userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const count = await this.prisma.notification.count({
        where: {
          recipientId: userId,
          status: NotificationStatus.UNREAD
        }
      });

      return count;
    } catch (error) {
      this.logger.error(`Error getting unread count: ${error.message}`);
      throw error;
    }
  }

  async getNotificationStats(userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const [total, unread, read, archived] = await this.prisma.$transaction([
        this.prisma.notification.count({
          where: {
            recipientId: userId,
            status: {
              not: NotificationStatus.DELETED
            }
          }
        }),
        this.prisma.notification.count({
          where: {
            recipientId: userId,
            status: NotificationStatus.UNREAD
          }
        }),
        this.prisma.notification.count({
          where: {
            recipientId: userId,
            status: NotificationStatus.READ
          }
        }),
        this.prisma.notification.count({
          where: {
            recipientId: userId,
            status: NotificationStatus.ARCHIVED
          }
        })
      ]);

      return {
        total,
        unread,
        read,
        archived
      };
    } catch (error) {
      this.logger.error(`Error getting notification stats: ${error.message}`);
      throw error;
    }
  }

  /**
   * Archive a notification
   */
  async archive(id: string, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const notification = await this.prisma.notification.updateMany({
        where: {
          id,
          recipientId: userId
        },
        data: {
          status: NotificationStatus.ARCHIVED
        }
      });

      if (notification.count === 0) {
        throw new Error('Notification not found or access denied');
      }

      this.logger.log(`Archived notification ${id}`);
      return { success: true };
    } catch (error) {
      this.logger.error(`Error archiving notification: ${error.message}`);
      throw error;
    }
  }

  async findByType(type: string, userId?: string, options?: {
    limit?: number;
    offset?: number;
  }) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const notifications = await this.prisma.notification.findMany({
        where: {
          recipientId: userId,
          type: type as any,
          status: {
            not: NotificationStatus.DELETED
          }
        },
        include: {
          recipient: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          },
          actor: {
            select: {
              id: true,
              displayName: true,
              username: true,
              avatarUrl: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: options?.limit || 50,
        skip: options?.offset || 0
      });

      return notifications;
    } catch (error) {
      this.logger.error(`Error fetching notifications by type: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get grouped notifications for a user
   */
  async getGroupedNotifications(userId?: string, options?: {
    limit?: number;
    offset?: number;
  }) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    return this.notificationGroupingService.getGroupedNotifications(userId, options);
  }

  /**
   * Ungroup a notification
   */
  async ungroupNotification(notificationId: string, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    return this.notificationGroupingService.ungroupNotification(notificationId, userId);
  }

  /**
   * Get notification grouping statistics
   */
  async getGroupingStats(userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    return this.notificationGroupingService.getGroupingStats(userId);
  }
}

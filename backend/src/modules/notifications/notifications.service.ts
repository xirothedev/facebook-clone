import { PrismaService } from '@/prisma/prisma.service';
import { RedisService } from '@/redis/redis.service';
import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { NotificationStatus, Prisma } from 'prisma/generated';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { FindAllNotificationsDto } from './dto/find-all-notifications.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationEventEmitterService } from './services/notification-event-emitter.service';
import { NotificationGroupingService } from './services/notification-grouping.service';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
    private readonly notificationGroupingService: NotificationGroupingService,
    private readonly notificationEventEmitterService: NotificationEventEmitterService
  ) { }

    async create(createNotificationDto: CreateNotificationDto) {
    try {
      // Use grouping service to create notification with grouping logic
      const notification = await this.notificationGroupingService.createNotificationWithGrouping(createNotificationDto);

      this.logger.log(`Created notification ${notification.id} for user ${notification.recipientId}`);

      const isSubscribed = await this.isUserSubscribed(notification.recipientId);
      
      if (isSubscribed) {
        // Emit real-time notification
        this.notificationEventEmitterService.emitNewNotification(notification.recipientId, notification);
        
        // Update unread count
        const unreadCount = await this.getUnreadCount(notification.recipientId);
        this.notificationEventEmitterService.emitUnreadCountUpdate(notification.recipientId, unreadCount);
      } else {
        this.logger.log(`User ${notification.recipientId} is ${!isSubscribed ? 'subscribed' : 'not subscribed'}, notification stored for later delivery`);
      }

      return {
        message: "Created notification successfully",
        data: notification
      };
    } catch (error) {
      this.logger.error(`Error creating notification: ${error.message}`);
      throw error;
    }
  }

  async findAll(userId?: string, query?: FindAllNotificationsDto) {
    try {
      const where: Prisma.NotificationWhereInput = {
        recipientId: userId,
        status: {
          not: NotificationStatus.DELETED
        }
      };

      if (query?.status) {
        where.status = query.status;
      }

      if (query?.type) {
        where.type = query.type;
      }

      const notifications = await this.prismaService.notification.findMany({
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
        take: query?.limit || 50,
        skip: query?.skip || 0
      });

      return {
        message: `Found ${notifications.length} notifications`,
        data: notifications
      };
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
      const notification = await this.prismaService.notification.findFirst({
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
        throw new NotFoundException('Notification not found');
      }

      return {
        message: "Found notification",
        data: notification
      };
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
      const existingNotification = await this.prismaService.notification.findFirst({
        where: {
          id,
          recipientId: userId
        }
      });

      if (!existingNotification) {
        throw new NotFoundException('Notification not found');
      }

      const notification = await this.prismaService.notification.update({
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
      this.notificationEventEmitterService.emitNotificationUpdate(notification.recipientId, notification);

      return {
        message: "Updated notification",
        data: notification
      };
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
      const notification = await this.prismaService.notification.updateMany({
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
        throw new NotFoundException('Notification not found');
      }

      this.logger.log(`Marked notification ${id} as read`);

      return { message: "Success" };
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
      const result = await this.prismaService.notification.updateMany({
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

      return { message: "Success", count: result.count };
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
      const notification = await this.prismaService.notification.updateMany({
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
        throw new NotFoundException('Notification not found');
      }

      return { message: "Success" };
    } catch (error) {
      this.logger.error(`Error deleting notification: ${error.message}`);
      throw error;
    }
  }


  async getNotificationStats(userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const [total, unread, read, archived] = await this.prismaService.$transaction([
        this.prismaService.notification.count({
          where: {
            recipientId: userId,
            status: {
              not: NotificationStatus.DELETED
            }
          }
        }),
        this.prismaService.notification.count({
          where: {
            recipientId: userId,
            status: NotificationStatus.UNREAD
          }
        }),
        this.prismaService.notification.count({
          where: {
            recipientId: userId,
            status: NotificationStatus.READ
          }
        }),
        this.prismaService.notification.count({
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

  async archive(id: string, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const notification = await this.prismaService.notification.updateMany({
        where: {
          id,
          recipientId: userId
        },
        data: {
          status: NotificationStatus.ARCHIVED
        }
      });

      if (notification.count === 0) {
        throw new NotFoundException('Notification not found');
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
      const notifications = await this.prismaService.notification.findMany({
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

  async getGroupedNotifications(userId?: string, options?: {
    limit?: number;
    offset?: number;
  }) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    return this.notificationGroupingService.getGroupedNotifications(userId, options);
  }

  async ungroupNotification(notificationId: string, userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    return this.notificationGroupingService.ungroupNotification(notificationId, userId);
  }

  async getGroupingStats(userId?: string) {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    return this.notificationGroupingService.getGroupingStats(userId);
  }

  async isUserOnline(userId: string): Promise<boolean> {
    try {
      const socketId = await this.redisService.get(`user:${userId}:socket`);
      return !!socketId;
    } catch (error) {
      this.logger.error(`Error checking user online status: ${error.message}`);
      return false;
    }
  }

  async getUserSocketId(userId: string): Promise<string | null> {
    try {
      return await this.redisService.get(`user:${userId}:socket`);
    } catch (error) {
      this.logger.error(`Error getting user socket ID: ${error.message}`);
      return null;
    }
  }

  async getOnlineUsers(): Promise<string[]> {
    try {
      const keys = await this.redisService.getClient().keys('user:*:socket');
      return keys.map(key => key.replace('user:', '').replace(':socket', ''));
    } catch (error) {
      this.logger.error(`Error getting online users: ${error.message}`);
      return [];
    }
  }

  async isUserSubscribed(userId: string): Promise<boolean> {
    try {
      const subscribed = await this.redisService.get(`user:${userId}:subscribed`);
      return !!subscribed;
    } catch (error) {
      this.logger.error(`Error checking user subscription status: ${error.message}`);
      return false; // Assume not subscribed on error
    }
  }

  public async getUnreadCount(userId?: string): Promise<number> {
    if (!userId) {
      throw new UnauthorizedException('User is not authenticated');
    }

    try {
      const count = await this.prismaService.notification.count({
        where: {
          recipientId: userId,
          status: NotificationStatus.UNREAD
        }
      });

      return count
    } catch (error) {
      this.logger.error(`Error getting unread count: ${error.message}`);
      throw error;
    }
  }
}

import { WsAuthGuard } from '@/common/guards/ws-auth.guard';
import { Logger, UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RedisService } from '@/redis/redis.service';
import { NotificationsService } from './notifications.service';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  },
  namespace: '/notifications'
})
@UseGuards(WsAuthGuard)
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(NotificationsGateway.name);

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly redisService: RedisService
  ) { }

  async handleConnection(client: Socket) {
    try {
      // Extract user ID from socket (set by WsAuthGuard)
      const userId = client.data.user?.id;

      if (!userId) {
        this.logger.warn('Client connected without user ID');
        client.disconnect();
        return;
      }

      // Join user's personal room
      await client.join(`user:${userId}`);

      // Store connection mapping in Redis
      await this.redisService.set(`user:${userId}:socket`, client.id, 3600); // 1 hour expiry

      this.logger.log(`User ${userId} connected to notifications`);

      // Send current unread count
      const unreadCount = await this.notificationsService.getUnreadCount(userId);
      client.emit('unreadCount', unreadCount);

    } catch (error) {
      this.logger.error(`Error handling connection: ${error.message}`);
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    try {
      const userId = client.data.user?.id;

      if (userId) {
        // Remove connection mapping from Redis
        await this.redisService.getClient().del(`user:${userId}:socket`);
        this.logger.log(`User ${userId} disconnected from notifications`);
      }
    } catch (error) {
      this.logger.error(`Error handling disconnection: ${error.message}`);
    }
  }

  @SubscribeMessage('markAsRead')
  async markAsRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { id: string }
  ) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      const result = await this.notificationsService.markAsRead(data.id, userId);

      // Update unread count for the user
      const unreadCount = await this.notificationsService.getUnreadCount(userId);
      client.emit('unreadCount', unreadCount);

      return result;
    } catch (error) {
      this.logger.error(`Error marking notification as read: ${error.message}`);
      return { error: error.message };
    }
  }

  @SubscribeMessage('markAllAsRead')
  async markAllAsRead(@ConnectedSocket() client: Socket) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      const result = await this.notificationsService.markAllAsRead(userId);

      // Update unread count for the user
      const unreadCount = await this.notificationsService.getUnreadCount(userId);
      client.emit('unreadCount', unreadCount);

      return result;
    } catch (error) {
      this.logger.error(`Error marking all notifications as read: ${error.message}`);
      return { error: error.message };
    }
  }

  @SubscribeMessage('deleteNotification')
  async deleteNotification(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { id: string }
  ) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      const result = await this.notificationsService.remove(data.id, userId);

      // Update unread count for the user
      const unreadCount = await this.notificationsService.getUnreadCount(userId);
      client.emit('unreadCount', unreadCount);

      return result;
    } catch (error) {
      this.logger.error(`Error deleting notification: ${error.message}`);
      return { error: error.message };
    }
  }

  @SubscribeMessage('archiveNotification')
  async archiveNotification(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { id: string }
  ) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      const result = await this.notificationsService.archive(data.id, userId);

      // Update unread count for the user
      const unreadCount = await this.notificationsService.getUnreadCount(userId);
      client.emit('unreadCount', unreadCount);

      return result;
    } catch (error) {
      this.logger.error(`Error archiving notification: ${error.message}`);
      return { error: error.message };
    }
  }



  @SubscribeMessage('subscribeToNotifications')
  async subscribeToNotifications(@ConnectedSocket() client: Socket) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      // User is already in their personal room from connection
      this.logger.log(`User ${userId} subscribed to real-time notifications`);
      return { success: true };
    } catch (error) {
      this.logger.error(`Error subscribing to notifications: ${error.message}`);
      return { error: error.message };
    }
  }

  @SubscribeMessage('unsubscribeFromNotifications')
  async unsubscribeFromNotifications(@ConnectedSocket() client: Socket) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      await client.leave(`user:${userId}`);
      this.logger.log(`User ${userId} unsubscribed from real-time notifications`);
      return { success: true };
    } catch (error) {
      this.logger.error(`Error unsubscribing from notifications: ${error.message}`);
      return { error: error.message };
    }
  }

  @SubscribeMessage('getConnectedUsersCount')
  async getConnectedUsersCount(@ConnectedSocket() client: Socket) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      // Check if user is admin (you can implement your own admin check)
      const isAdmin = client.data.user?.role === 'ADMIN';

      if (!isAdmin) {
        return { error: 'Access denied' };
      }

      // Get connected users count from Redis
      const keys = await this.redisService.getClient().keys('user:*:socket');
      return { count: keys.length };
    } catch (error) {
      this.logger.error(`Error getting connected users count: ${error.message}`);
      return { error: error.message };
    }
  }

  emitNewNotification(userId: string, notification: any) {
    try {
      this.server.to(`user:${userId}`).emit('newNotification', notification);
      this.logger.log(`Emitted new notification to user ${userId}`);
    } catch (error) {
      this.logger.error(`Error emitting new notification: ${error.message}`);
    }
  }

  emitNotificationUpdate(userId: string, notification: any) {
    try {
      this.server.to(`user:${userId}`).emit('notificationUpdate', notification);
      this.logger.log(`Emitted notification update to user ${userId}`);
    } catch (error) {
      this.logger.error(`Error emitting notification update: ${error.message}`);
    }
  }

  emitUnreadCountUpdate(userId: string, unreadCount: number) {
    try {
      this.server.to(`user:${userId}`).emit('unreadCount', unreadCount);
      this.logger.log(`Emitted unread count update to user ${userId}: ${unreadCount}`);
    } catch (error) {
      this.logger.error(`Error emitting unread count update: ${error.message}`);
    }
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
}

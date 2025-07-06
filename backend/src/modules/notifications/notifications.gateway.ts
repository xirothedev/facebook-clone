import { WsAuthGuard } from '@/common/guards/ws-auth.guard';
import { RedisService } from '@/redis/redis.service';
import { Logger, UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
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

  @SubscribeMessage('subscribeToNotifications')
  async subscribeToNotifications(@ConnectedSocket() client: Socket) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      // Ensure user is in their personal room
      await client.join(`user:${userId}`);

      // Update subscription status in Redis
      await this.redisService.set(`user:${userId}:subscribed`, 'true', 3600);

      // Send current unread count after subscription
      const unreadCount = await this.notificationsService.getUnreadCount(userId);
      client.emit('unreadCount', unreadCount);

      this.logger.log(`User ${userId} subscribed to real-time notifications`);
      return { success: true, unreadCount };
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

      // Remove subscription status from Redis
      await this.redisService.getClient().del(`user:${userId}:subscribed`);

      this.logger.log(`User ${userId} unsubscribed from real-time notifications`);
      return { success: true };
    } catch (error) {
      this.logger.error(`Error unsubscribing from notifications: ${error.message}`);
      return { error: error.message };
    }
  }

  @SubscribeMessage('getSubscriptionStatus')
  async getSubscriptionStatus(@ConnectedSocket() client: Socket) {
    try {
      const userId = client.data.user?.id;

      if (!userId) {
        return { error: 'Unauthorized' };
      }

      const isSubscribed = await this.redisService.get(`user:${userId}:subscribed`);
      return { subscribed: !!isSubscribed };
    } catch (error) {
      this.logger.error(`Error getting subscription status: ${error.message}`);
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
}

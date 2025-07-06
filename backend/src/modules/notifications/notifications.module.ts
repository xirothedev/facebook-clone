import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationsService } from './notifications.service';
import { NotificationEventEmitterService } from './services/notification-event-emitter.service';
import { NotificationEventListenerService } from './services/notification-event-listener.service';
import { NotificationGroupingService } from './services/notification-grouping.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
    NotificationsGateway,
    NotificationEventEmitterService,
    NotificationEventListenerService,
    NotificationGroupingService,

  ],
  exports: [
    NotificationsService,
    NotificationEventEmitterService,
    NotificationGroupingService
  ]
})
export class NotificationsModule {}

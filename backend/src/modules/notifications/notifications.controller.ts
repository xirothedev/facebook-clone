import { Roles } from '@/common/decorators/roles.decorator';
import { RolesGuard } from '@/common/guards/roles.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { NotificationStatus, UserRole } from 'prisma/generated';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationsService } from './notifications.service';

@ApiTags('notifications')
@Controller('notifications')
@ApiBearerAuth()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }

  @Get()
  @ApiOperation({ summary: 'Get user notifications' })
  @ApiResponse({ status: 200, description: 'Notifications retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiQuery({ name: 'status', required: false, enum: NotificationStatus })
  @ApiQuery({ name: 'type', required: false, type: String })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  getNotifications(
    @Req() req: Request,
    @Query('status') status?: NotificationStatus,
    @Query('type') type?: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.notificationsService.findAll(req?.user?.id, {
      status,
      type,
      limit: limit ? parseInt(limit.toString()) : undefined,
      offset: offset ? parseInt(offset.toString()) : undefined
    });
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get notification statistics' })
  @ApiResponse({ status: 200, description: 'Statistics retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getNotificationStats(@Req() req: Request) {
    return this.notificationsService.getNotificationStats(req?.user?.id);
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Get unread notification count' })
  @ApiResponse({ status: 200, description: 'Unread count retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getUnreadCount(@Req() req: Request) {
    return this.notificationsService.getUnreadCount(req?.user?.id);
  }

  @Get('type/:type')
  @ApiOperation({ summary: 'Get notifications by type' })
  @ApiResponse({ status: 200, description: 'Notifications retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  getNotificationsByType(
    @Req() req: Request,
    @Param('type') type: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.notificationsService.findByType(type, req?.user?.id, {
      limit: limit ? parseInt(limit.toString()) : undefined,
      offset: offset ? parseInt(offset.toString()) : undefined
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get specific notification' })
  @ApiResponse({ status: 200, description: 'Notification retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Notification not found' })
  async getNotification(@Req() req: Request, @Param('id') id: string) {
    return this.notificationsService.findOne(id, req?.user?.id);
  }

  @Post()
  @ApiOperation({ summary: 'Create notification (admin only)' })
  @ApiResponse({ status: 201, description: 'Notification created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin only' })
  @UseGuards(RolesGuard)
  @Roles(UserRole.admin)
  async createNotification(
    @Req() req: Request,
    @Body() createNotificationDto: CreateNotificationDto
  ) {
    return this.notificationsService.create(createNotificationDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update notification' })
  @ApiResponse({ status: 200, description: 'Notification updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Notification not found' })
  async updateNotification(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return this.notificationsService.update(id, updateNotificationDto, req?.user?.id);
  }

  @Put(':id/read')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark notification as read' })
  @ApiResponse({ status: 200, description: 'Notification marked as read' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Notification not found' })
  async markAsRead(@Req() req, @Param('id') id: string) {
    const userId = req.user.id;
    const result = await this.notificationsService.markAsRead(id, userId);
    return result;
  }

  @Put('mark-all-read')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark all notifications as read' })
  @ApiResponse({ status: 200, description: 'All notifications marked as read' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async markAllAsRead(@Req() req: Request) {
    return this.notificationsService.markAllAsRead(req?.user?.id);
  }

  @Put(':id/archive')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Archive notification' })
  @ApiResponse({ status: 200, description: 'Notification archived successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Notification not found' })
  archiveNotification(@Req() req: Request, @Param('id') id: string) {
    return this.notificationsService.archive(id, req?.user?.id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete notification' })
  @ApiResponse({ status: 200, description: 'Notification deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Notification not found' })
  deleteNotification(@Req() req: Request, @Param('id') id: string) {
    return this.notificationsService.remove(id, req?.user?.id);
  }

  @Get('grouped')
  @ApiOperation({ summary: 'Get grouped notifications' })
  @ApiResponse({ status: 200, description: 'Grouped notifications retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  getGroupedNotifications(
    @Req() req: Request,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.notificationsService.getGroupedNotifications(req?.user?.id, {
      limit: limit ? parseInt(limit.toString()) : undefined,
      offset: offset ? parseInt(offset.toString()) : undefined
    });
  }

  @Put(':id/ungroup')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Ungroup notification' })
  @ApiResponse({ status: 200, description: 'Notification ungrouped successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Notification not found' })
  ungroupNotification(@Req() req: Request, @Param('id') id: string) {
    return this.notificationsService.ungroupNotification(id, req?.user?.id);
  }

  @Get('grouping-stats')
  @ApiOperation({ summary: 'Get notification grouping statistics' })
  @ApiResponse({ status: 200, description: 'Grouping statistics retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getGroupingStats(@Req() req: Request) {
    return this.notificationsService.getGroupingStats(req?.user?.id);
  }
} 
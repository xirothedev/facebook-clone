import { NotificationPriority, NotificationType } from 'prisma/generated';

// Base notification event interface
export interface BaseNotificationEvent {
  recipientId: string;
  actorId?: string;
  type: NotificationType
  title: string;
  message: string;
  priority?: NotificationPriority;
  metadata?: any;
}

// Social interaction events
export interface PostLikeEvent extends BaseNotificationEvent {
  type: "POST_LIKE";
  postId: string;
  actionUrl?: string;
}

export interface PostCommentEvent extends BaseNotificationEvent {
  type: "POST_COMMENT";
  postId: string;
  commentId: string;
  actionUrl?: string;
}

export interface PostShareEvent extends BaseNotificationEvent {
  type: "POST_SHARE";
  postId: string;
  actionUrl?: string;
}

export interface CommentLikeEvent extends BaseNotificationEvent {
  type: "COMMENT_LIKE";
  postId: string;
  commentId: string;
  actionUrl?: string;
}

export interface CommentReplyEvent extends BaseNotificationEvent {
  type: "COMMENT_REPLY";
  postId: string;
  commentId: string;
  actionUrl?: string;
}

// Friendship events
export interface FriendRequestEvent extends BaseNotificationEvent {
  type: "FRIEND_REQUEST";
  friendRequestId: string;
  actionUrl?: string;
}

export interface FriendRequestAcceptedEvent extends BaseNotificationEvent {
  type: "FRIEND_REQUEST_ACCEPTED";
  friendRequestId: string;
  actionUrl?: string;
}

export interface FriendSuggestionEvent extends BaseNotificationEvent {
  type: "FRIEND_SUGGESTION";
  actionUrl?: string;
}

export interface BirthdayReminderEvent extends BaseNotificationEvent {
  type: "BIRTHDAY_REMINDER";
  priority: "HIGH";
  actionUrl?: string;
}

// Group events
export interface GroupInviteEvent extends BaseNotificationEvent {
  type: "GROUP_INVITE";
  groupId: string;
  actionUrl?: string;
}

export interface GroupPostEvent extends BaseNotificationEvent {
  type: "GROUP_POST";
  groupId: string;
  postId: string;
  actionUrl?: string;
}

export interface GroupEventEvent extends BaseNotificationEvent {
  type: "GROUP_EVENT";
  groupId: string;
  eventId: string;
  actionUrl?: string;
}

// Page events
export interface PageLikeEvent extends BaseNotificationEvent {
  type: 'PAGE_LIKE';
  pageId: string;
  actionUrl?: string;
}

export interface PagePostEvent extends BaseNotificationEvent {
  type: 'PAGE_POST';
  pageId: string;
  postId: string;
  actionUrl?: string;
}

export interface PageEventEvent extends BaseNotificationEvent {
  type: "PAGE_EVENT";
  pageId: string;
  eventId: string;
  actionUrl?: string;
}

// Event activities
export interface EventInviteEvent extends BaseNotificationEvent {
  type: "EVENT_INVITE";
  eventId: string;
  actionUrl?: string;
}

export interface EventUpdateEvent extends BaseNotificationEvent {
  type: "EVENT_UPDATE";
  eventId: string;
  actionUrl?: string;
}

export interface EventReminderEvent extends BaseNotificationEvent {
  type: "EVENT_REMINDER";
  eventId: string;
  priority: "HIGH";
  actionUrl?: string;
}

// Marketplace events
export interface MarketplaceListingEvent extends BaseNotificationEvent {
  type: "MARKETPLACE_LISTING";
  listingId: string;
  actionUrl?: string;
}

export interface MarketplaceMessageEvent extends BaseNotificationEvent {
  type: "MARKETPLACE_MESSAGE";
  listingId: string;
  messageId: string;
  actionUrl?: string;
}

// System events
export interface SecurityAlertEvent extends BaseNotificationEvent {
  type: "SECURITY_ALERT";
  priority: "URGENT";
  actionUrl?: string;
}

export interface AccountUpdateEvent extends BaseNotificationEvent {
  type: "ACCOUNT_UPDATE";
  priority: "HIGH";
  actionUrl?: string;
}

export interface PolicyUpdateEvent extends BaseNotificationEvent {
  type: "POLICY_UPDATE";
  priority: "HIGH";
  actionUrl?: string;
}

export interface MaintenanceEvent extends BaseNotificationEvent {
  type: "MAINTENANCE";
  priority: "HIGH";
  actionUrl?: string;
}

// Live and stories events
export interface LiveStreamEvent extends BaseNotificationEvent {
  type: "LIVE_STREAM";
  streamId: string;
  actionUrl?: string;
}

export interface StoryMentionEvent extends BaseNotificationEvent {
  type: "STORY_MENTION";
  storyId: string;
  actionUrl?: string;
}

export interface StoryReactionEvent extends BaseNotificationEvent {
  type: "STORY_REACTION";
  storyId: string;
  reactionId: string;
  actionUrl?: string;
}

// Memories events
export interface MemoryReminderEvent extends BaseNotificationEvent {
  type: "MEMORY_REMINDER";
  memoryId: string;
  actionUrl?: string;
}

export interface PhotoTagEvent extends BaseNotificationEvent {
  type: "PHOTO_TAG";
  photoId: string;
  actionUrl?: string;
}

export interface PhotoApprovalEvent extends BaseNotificationEvent {
  type: "PHOTO_APPROVAL";
  photoId: string;
  actionUrl?: string;
}

// Union type for all notification events
export type NotificationEvent =
  | PostLikeEvent
  | PostCommentEvent
  | PostShareEvent
  | CommentLikeEvent
  | CommentReplyEvent
  | FriendRequestEvent
  | FriendRequestAcceptedEvent
  | FriendSuggestionEvent
  | BirthdayReminderEvent
  | GroupInviteEvent
  | GroupPostEvent
  | GroupEventEvent
  | PageLikeEvent
  | PagePostEvent
  | PageEventEvent
  | EventInviteEvent
  | EventUpdateEvent
  | EventReminderEvent
  | MarketplaceListingEvent
  | MarketplaceMessageEvent
  | SecurityAlertEvent
  | AccountUpdateEvent
  | PolicyUpdateEvent
  | MaintenanceEvent
  | LiveStreamEvent
  | StoryMentionEvent
  | StoryReactionEvent
  | MemoryReminderEvent
  | PhotoTagEvent
  | PhotoApprovalEvent; 
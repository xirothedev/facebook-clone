import { IsOptional, IsEnum, IsBoolean, IsString } from "class-validator";
import { Audience, SendFriendRequest, TypeSendMessage } from "prisma/generated";

export class UpdateAudienceAndVisibilityDto {
	@IsOptional()
	@IsEnum(SendFriendRequest)
	whoCanSendFriendRequest?: SendFriendRequest;

	@IsOptional()
	@IsEnum(Audience)
	whoCanSeeListFriends?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	peopleWithYourEmailAddress?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	peopleWithYourPhoneNumber?: Audience;

	@IsOptional()
	@IsBoolean()
	searchAccountByLink?: boolean;

	// ===== Message Request Settings =====
	@IsOptional()
	@IsEnum(TypeSendMessage)
	forFriendsOfFriendRequest?: TypeSendMessage;

	@IsOptional()
	@IsEnum(TypeSendMessage)
	forPeopleMultialGroup?: TypeSendMessage;

	@IsOptional()
	@IsEnum(TypeSendMessage)
	forPageFollow?: TypeSendMessage;

	@IsOptional()
	@IsEnum(TypeSendMessage)
	forOtherPeople?: TypeSendMessage;

	// ===== Post Visibility =====
	@IsOptional()
	@IsEnum(Audience)
	whoCanseeYourFuturePosts?: Audience;

	@IsOptional()
	@IsBoolean()
	limitWhoCanSeePastPost?: boolean;

	@IsOptional()
	@IsBoolean()
	allCommentSummariesOnPosts?: boolean;

	// ===== Story Settings =====
	@IsOptional()
	@IsEnum(Audience)
	whoCanSeeYourStories?: Audience;

	@IsOptional()
	@IsBoolean()
	allowOtherShareYourStories?: boolean;

	@IsOptional()
	@IsBoolean()
	archivingStories?: boolean;

	// ===== Reels Settings =====
	@IsOptional()
	@IsEnum(Audience)
	whoCanSeeYourReels?: Audience;

	@IsOptional()
	@IsBoolean()
	allowOtherShareaYourReels?: boolean;

	// ===== Public & Follower =====
	@IsOptional()
	@IsEnum(Audience)
	whoCanFollowMe?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	whoCanSeeYourFollowers?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	whoCanSeeSomethingYouFollow?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	whoCanCommentYourPosts?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	publicPostNotification?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	publicProfileInfo?: Audience;

	@IsOptional()
	@IsBoolean()
	showMostRelevantCommentsFirst?: boolean;

	@IsOptional()
	@IsBoolean()
	offFacebookPreviews?: boolean;

	@IsOptional()
	@IsString()
	hideSomethingOnYourProfile?: string;

	// ===== Profile & Tagging =====
	@IsOptional()
	@IsEnum(Audience)
	whoCanPostYourProfile?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	whoCanSeeWhatOtherPostOnYourProfile?: Audience;

	@IsOptional()
	@IsBoolean()
	allowOtherShareYourPostsToTheirStories?: boolean;

	@IsOptional()
	@IsEnum(Audience)
	whoCanSeePostsYouTagOnYourProfile?: Audience;

	@IsOptional()
	@IsEnum(Audience)
	whoYouWannaToTagAndNotRead?: Audience;

	@IsOptional()
	@IsBoolean()
	reviewPeopleAddToYourPostBeforePublish?: boolean;

	@IsOptional()
	@IsBoolean()
	reviewPostBeforePublish?: boolean;
}

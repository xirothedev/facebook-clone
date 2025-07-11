import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Audience, CoLor, PreferenceType, SendFriendRequest, TypeSendMessage, VideoQuality } from "prisma/generated";
import { UpdateAudienceAndVisibilityDto } from "./dto/update-audience-setting.dto";
import { UpdatePreferenceDto } from "./dto/update-preference.dto";

@Injectable()
export class SettingService {
	constructor(private readonly prismaService: PrismaService) {}

	async createSettingDefault(userId: string) {
		const [preference, audienceSetting] = await this.prismaService.$transaction([
			this.prismaService.preference.create({
				data: {
					userId,
					type: PreferenceType.NOTIFICATION,
					notificationType: null, // null khi tạo default, có thể thêm sau
					push: false,
					email: false,
					sms: false,
					reactionTarget: null,
					hidden: false,

					reduceMotion: false,
					screenReader: false,

					languageCode: "en",
					timezone: "Asia/Ho_Chi_Minh",
					locale: "en_US",

					darkModeEnabled: false,

					videoQuality: VideoQuality.DEFAULT,
					autoPlayAnimations: false,
					alwaysShowCaptions: false,
					quietMode: false,

					backGroundColor: CoLor.BLACK,
					backGroundOpacity: 45,
					textColor: CoLor.WHITE,
					textSize: 100,
				},
			}),

			this.prismaService.audienceAndVisibility.create({
				data: {
					userId,

					whoCanSendFriendRequest: SendFriendRequest.EVERYONE,
					whoCanSeeListFriends: Audience.PUBLIC,
					peopleWithYourEmailAddress: Audience.PUBLIC,
					peopleWithYourPhoneNumber: Audience.PUBLIC,
					searchAccountByLink: true,

					forFriendsOfFriendRequest: TypeSendMessage.MESSAGEREQUESTS,
					forPeopleMultialGroup: TypeSendMessage.CHATS,
					forPageFollow: TypeSendMessage.MESSAGEREQUESTS,
					forOtherPeople: TypeSendMessage.MESSAGEREQUESTS,

					whoCanseeYourFuturePosts: Audience.ONLYME,
					limitWhoCanSeePastPost: false,
					allCommentSummariesOnPosts: true,

					whoCanSeeYourStories: Audience.PUBLIC,
					allowOtherShareYourStories: true,
					archivingStories: true,

					allowOtherShareaYourReels: true,
					whoCanSeeYourReels: Audience.PUBLIC,

					whoCanFollowMe: Audience.PUBLIC,
					whoCanSeeYourFollowers: Audience.PUBLIC,
					whoCanSeeSomethingYouFollow: Audience.PUBLIC,
					whoCanCommentYourPosts: Audience.PUBLIC,
					publicPostNotification: Audience.PUBLIC,
					publicProfileInfo: Audience.PUBLIC,
					showMostRelevantCommentsFirst: true,
					offFacebookPreviews: true,
					hideSomethingOnYourProfile: "",

					whoCanPostYourProfile: Audience.FRIENDS,
					whoCanSeeWhatOtherPostOnYourProfile: Audience.FRIENDS,
					allowOtherShareYourPostsToTheirStories: true,
					whoCanSeePostsYouTagOnYourProfile: Audience.FRIENDS,
					whoYouWannaToTagAndNotRead: Audience.FRIENDS,
					reviewPeopleAddToYourPostBeforePublish: false,
					reviewPostBeforePublish: true,
				},
			}),
		]);

		return { preference, audienceSetting };
	}

	async getSetting(userId: string) {
		const setting = await this.prismaService.preference.findUnique({
			where: { userId: userId },
		});

		if (!setting) {
			throw new UnauthorizedException("Setting or user not found");
		}

		return {
			message: "Get setting successful",
			data: setting,
		};
	}

	async updateAudienceSetting(settingId: string, data: UpdateAudienceAndVisibilityDto) {
		const setting = await this.prismaService.preference.findUnique({
			where: { id: settingId },
		});

		if (!setting) {
			throw new UnauthorizedException("Setting or user not found");
		}

		const audienceAndVisibility = await this.prismaService.preference.update({
			where: { id: setting.id },
			data: { ...(data as any) },
		});

		return {
			message: "Update audience and visibility setting successful",
			data: audienceAndVisibility,
		};
	}

	async updateReference(settingId: string, data: UpdatePreferenceDto) {
		const setting = await this.prismaService.preference.findUnique({
			where: { id: settingId },
		});

		if (!setting) {
			throw new UnauthorizedException("Setting or user not found");
		}

		const audienceAndVisibility = await this.prismaService.preference.update({
			where: { id: setting.id },
			data: { ...(data as any) },
		});

		return {
			message: "Update setting successful",
			data: audienceAndVisibility,
		};
	}
}

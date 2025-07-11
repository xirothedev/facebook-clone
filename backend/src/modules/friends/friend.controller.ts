import { Controller, Get, Query } from "@nestjs/common";
import { FriendsService } from "./friends.service";

@Controller("friends")
export class FriendsController {
	constructor(private readonly friendService: FriendsService) {}

	@Get("loading-list-request")
	async loadingFriendsRequest(@Query("userId") userId: string) {
		return this.friendService.loadingFriendsRequest(userId);
	}

	@Get("loading-list-friends")
	async loadingListFriends(@Query("userId") userId: string) {
		return this.friendService.loadingListFriends(userId);
	}

	@Get("loading-list-user-got-birthday")
	async loadingBirthdayUser(@Query("userId") userId: string) {
		return this.friendService.loadingBirthdayUser(userId);
	}

	@Get("loading-custom-list-friends")
	async loadingCustomList(@Query("userId") userId: string) {
		return this.friendService.loadingCustomList(userId);
	}
}

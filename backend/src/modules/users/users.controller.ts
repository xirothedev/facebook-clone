import { Controller, Delete, Post, Query, Req } from "@nestjs/common";
import { FriendsService } from "../friends/friends.service";
import { Request } from "express";
@Controller("users")
export class UsersController {
	constructor(private readonly friendService: FriendsService) {}

	@Post("sent-request-add-friend")
	async sentRequestAddFriend(@Query("addressId") addressId: string, @Req() req: Request) {
		return this.friendService.sendRequestAddFriend(addressId, req);
	}

	@Post("accept-request-add-friend")
	async acceptRequest(@Query("requestId") requestId: string, @Req() req: Request) {
		return this.friendService.acceptRequest(requestId, req);
	}

	@Delete("delete-friend")
	async deleteFriend(@Query("addressId") addressId: string) {
		return this.friendService.deleteFriend(addressId);
	}
}

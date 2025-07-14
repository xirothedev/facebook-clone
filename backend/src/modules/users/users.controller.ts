import { Body, Controller, Delete, Get, Post, Query, Req } from "@nestjs/common";
import { FriendsService } from "../friends/friends.service";
import { Request } from "express";
import { PageService } from "../pages/pages.service";
import { CreatePageDto } from "../pages/dto/createPage.dto";
import { FollowPageDto } from "../pages/dto/followPage.dto";
import { PrismaService } from "@/prisma/prisma.service";
@Controller("users")
export class UsersController {
	constructor(
		private readonly friendService: FriendsService,
		private readonly pageService: PageService,
		private readonly prismaService: PrismaService,
	) {}

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

	@Post("create-page")
	async createAPage(@Query("userId") userId: string, @Body() data: CreatePageDto) {
		return this.pageService.createPage(userId, data);
	}

	@Post("follow-page")
	async followPage(@Body() data: FollowPageDto, @Req() req: Request) {
		return this.pageService.followPage(data, req);
	}

	@Post("unfollow-page")
	async ulfollowPage(@Body("pageId") pageId: string, @Req() req: Request) {
		return this.pageService.unfollowPage(pageId, req);
	}

	@Get("list-follow-page")
	async getListPage(@Req() req: Request) {
		return this.pageService.getListPage(req);
	}

	// test
	@Get("get-all-pages")
	async getAllPage() {
		return await this.prismaService.page.findMany();
	}
}

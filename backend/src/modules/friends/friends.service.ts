import { PrismaService } from "@/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from "express";
import { NotificationType } from "prisma/generated";
import { NotificationsService } from "../notifications/notifications.service";

@Injectable()
export class FriendsService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly notificationsService: NotificationsService,
	) {}

	async loadingFriendsSentRequest(userId: string) {
		const users = await this.prismaService.user.findUnique({
			where: { id: userId },
			include: { receivedFriendRequests: { where: { status: "PENDING" } } },
		});

		if (!users) {
			throw new BadRequestException("User not found");
		}

		return {
			message: "Get list friendsRequest successful",
			data: users,
		};
	}

	async loadingListFriends(userId: string) {
		const users = await this.prismaService.user.findUnique({
			where: { id: userId },
			include: {
				receivedFriendRequests: { where: { status: "ACCEPTED" } },
				sentFriendRequests: { where: { status: "ACCEPTED" } },
			},
		});

		if (!users) {
			throw new BadRequestException("User not found");
		}

		const friendIds = [
			...users.receivedFriendRequests.map((req) => req.requesterId),
			...users.sentFriendRequests.map((req) => req.addresseeId),
		];

		return {
			message: "Get list friends successful",
			data: friendIds,
		};
	}

	async loadingBirthdayUser(userId: string) {
		const users = await this.prismaService.user.findUnique({
			where: { id: userId },
			include: {
				receivedFriendRequests: { where: { status: "ACCEPTED" } },
				sentFriendRequests: { where: { status: "ACCEPTED" } },
			},
		});

		if (!users) {
			throw new BadRequestException("User not found");
		}

		const friendIds = [
			...users.receivedFriendRequests.map((req) => req.requesterId),
			...users.sentFriendRequests.map((req) => req.addresseeId),
		];

		const getBirthayUsers = await this.prismaService.user.findMany({
			where: { id: { in: friendIds } },
		});

		const today = new Date();
		const currentMonth = today.getMonth() + 1; // getMonth() returns 0-11
		const currentDay = today.getDate();

		const userGotBirthday = getBirthayUsers.filter((user) => {
			if (!user.birthday) return false;
			const birthday = new Date(user.birthday);
			const birthdayMonth = birthday.getMonth() + 1;
			const birthdayDay = birthday.getDate();

			return birthdayMonth === currentMonth && birthdayDay === currentDay;
		});

		return {
			message: "Get list birthdayuser successful",
			data: userGotBirthday,
		};
	}

	async loadingCustomList(userId: string) {
		const friendRelations = await this.prismaService.friendship.findMany({
			where: {
				OR: [
					{ requesterId: userId, status: "ACCEPTED" },
					{ addresseeId: userId, status: "ACCEPTED" },
				],
			},
			include: {
				requester: true,
				addressee: true,
			},
		});

		const listAccquaintances = friendRelations.filter((friend) => friend.statusCustom === "ACCQUAINTANCES");
		const listCloseFriends = friendRelations.filter((friend) => friend.statusCustom === "CLOSEFRIENDS");
		const listRestrictedFriends = friendRelations.filter((friend) => friend.statusCustom === "RESTRICTED");

		return {
			message: "Loading successful",
			data: {
				listAccquaintances,
				listCloseFriends,
				listRestrictedFriends,
			},
		};
	}

	async sendRequestAddFriend(addressId: string, req: Request) {
		const user = await this.prismaService.user.findUnique({
			where: { id: req.user?.id },
			include: { sentFriendRequests: true },
		});

		const userReceives = user?.sentFriendRequests.filter((userReceive) => userReceive.addresseeId === addressId);

		if (userReceives && userReceives.length > 0) {
			throw new BadRequestException("Request is not duplicated");
		}

		const requestUser = await this.prismaService.friendship.create({
			data: {
				requesterId: user!.id,
				addresseeId: addressId,
			},
		});

		// Create notification for the recipient
		await this.notificationsService.create({
			recipientId: addressId,
			actorId: user!.id,
			type: NotificationType.FRIEND_REQUEST,
			title: "New request",
			message: `${user!.displayName || user!.username} sent request to you`,
			actionUrl: `/friends/requests`,
			priority: "NORMAL",
		});

		return {
			message: "sent request successful",
			data: requestUser,
		};
	}

	async acceptRequest(requesterId: string, req: Request) {
		const user = await this.prismaService.user.findUnique({
			where: { id: req.user?.id },
			include: { receivedFriendRequests: { where: { status: "PENDING" } } },
		});

		if (!user) {
			throw new BadRequestException("User not found");
		}

		// Update the friendship status to ACCEPTED
		await this.prismaService.friendship.updateMany({
			where: {
				requesterId: requesterId,
				addresseeId: user.id,
				status: "PENDING",
			},
			data: {
				status: "ACCEPTED",
			},
		});

		// Create notification for the requester
		await this.notificationsService.create({
			recipientId: requesterId,
			actorId: user.id,
			type: NotificationType.FRIEND_REQUEST,
			title: "Friend Request Accepted",
			message: `${user.displayName || user.username} accepted your friend request`,
			actionUrl: `/friends/requests`,
			priority: "NORMAL",
		});

		return {
			message: "Friend request accepted successfully",
			data: {
				requesterId: requesterId,
				addresseeId: user.id,
			},
		};
	}

	async deleteFriend(addressId: string) {
		const user = await this.prismaService.friendship.findFirst({
			where: { addresseeId: addressId },
		});

		if (!user) {
			throw new NotFoundException("User not found");
		}

		await this.prismaService.friendship.deleteMany({
			where: { addresseeId: addressId },
		});

		return {
			message: "Delete friend successful",
		};
	}
}

import { PrismaService } from "@/prisma/prisma.service";
import { BadRequestException, Injectable } from "@nestjs/common";
@Injectable()
export class FriendsService {
	constructor(private readonly prismaService: PrismaService) {}

	async loadingFriendsRequest(userId: string) {
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
				sentFriendRequests: {
					where: { status: "ACCEPTED" },
				},
			},
		});

		if (!users) {
			throw new BadRequestException("User not found");
		}

		return {
			message: "Get list friends successful",
			data: users,
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

		const userGotBirthday = getBirthayUsers.filter((user) => user.birthday.toString() === Date.now().toString());

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
}

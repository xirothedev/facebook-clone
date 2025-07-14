import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreatePageDto } from "./dto/createPage.dto";
import { PrismaService } from "@/prisma/prisma.service";
import { EditDetailPage } from "./dto/ editDetailPage.dto";
import { Request } from "express";
import { FollowPageDto } from "./dto/followPage.dto";
@Injectable()
export class PageService {
	constructor(private readonly prismaService: PrismaService) {}

	async createPage(userId: string, data: CreatePageDto) {
		const exitedName = await this.prismaService.page.findFirst({
			where: { name: data.name },
		});

		if (exitedName) {
			throw new BadRequestException("Name invalid or available");
		}

		const newPage = await this.prismaService.page.create({
			data: {
				name: data.name,
				categories: data.categories,
				phoneNumber: data.phoneNumber,
				adminId: userId,
				createAt: new Date(),
			},
		});

		return {
			message: "Create new page successful",
			data: newPage,
		};
	}

	async editDetailPage(userId: string, data: EditDetailPage) {
		const exitedUser = await this.prismaService.user.findUnique({
			where: { id: userId },
			include: { adminPages: true },
		});

		if (!exitedUser) {
			throw new NotFoundException("user not found");
		}

		const exitedPage = await this.prismaService.page.findFirst({
			where: { adminId: exitedUser.id },
		});

		if (!exitedPage) {
			throw new UnauthorizedException("You are not the author page");
		}

		const newPage = await this.prismaService.page.update({
			where: { id: exitedPage.id },
			data: { ...(data as any) },
		});

		return {
			message: "Page is updated successsful",
			data: newPage,
		};
	}

	async followPage(data: FollowPageDto, req: Request) {
		const exitedUser = await this.prismaService.user.findUnique({
			where: { id: req.user?.id },
		});

		if (!exitedUser) {
			throw new NotFoundException("User is not available");
		}

		if (!req.user?.id) {
			throw new NotFoundException("User ID is missing");
		}

		const follower = await this.prismaService.pageFollow.create({
			data: {
				userId: req.user.id,
				pageId: data.pageId,
			},
		});

		return {
			messgae: "Done",
			data: follower,
		};
	}

	async unfollowPage(pageId: string, req: Request) {
		const exitedUser = await this.prismaService.user.findUnique({
			where: { id: req.user?.id },
		});

		if (!exitedUser) {
			throw new NotFoundException("User is not available");
		}

		await this.prismaService.pageFollow.deleteMany({
			where: {
				userId: exitedUser.id,
				pageId: pageId,
			},
		});

		return {
			messgae: "Done",
		};
	}

	async getListPage(req: Request) {
		const exitedUser = await this.prismaService.user.findUnique({
			where: { id: req.user?.id },
			include: { followedPages: true },
		});

		if (!exitedUser) {
			throw new NotFoundException("User is not available");
		}

		const ListFollowPages = exitedUser.followedPages.map((page) => page.userId === exitedUser.id);

		return {
			message: "Done",
			data: ListFollowPages,
		};
	}
}

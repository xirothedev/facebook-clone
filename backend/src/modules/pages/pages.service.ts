import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreatePageDto } from "./dto/createPage.dto";
import { PrismaService } from "@/prisma/prisma.service";
import { EditDetailPage } from "./dto/ editDetailPage.dto";

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
				categories: data.category,
				phoneNumber: data.phoneNumber,
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
		});

		if (!exitedUser) {
			throw new NotFoundException("user not found");
		}

		const exitedPage = await this.prismaService.pageAdmin.findFirst({
			where: { userId: exitedUser.id },
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
}

import { BadRequestException, Injectable } from "@nestjs/common";
import { CreatePageDto } from "./dto/createPage.dto";
import { PrismaService } from "@/prisma/prisma.service";

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
}

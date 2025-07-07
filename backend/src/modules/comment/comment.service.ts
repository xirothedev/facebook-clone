import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@Injectable()
export class CommentService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(req: Request, body: CreateCommentDto) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const post = await this.prismaService.post.findUnique({
			where: { id: body.postId },
		});

		if (!post) {
			throw new NotFoundException("Post not found");
		}

		if (body.parentId) {
			const commentParent = await this.prismaService.comment.findUnique({
				where: { id: body.parentId, postId: body.postId },
			});

			if (!commentParent) {
				throw new NotFoundException("Comment parent not found or invalid post comment parent");
			}
		}

		const comment = await this.prismaService.comment.create({
			data: {
				content: body.content,
				postId: body.postId,
				parentId: body.parentId,
				authorId: req.user.id,
				status: "DISPLAY",
			},
			include: { replies: true, reations: true },
		});

		return {
			message: "Creata comment successful",
			data: comment,
		};
	}

	async findAll(postId: string) {
		const comments = await this.prismaService.comment.findMany({
			where: { postId, parentId: null },
			orderBy: { createdAt: "asc" },
			include: { replies: true, reations: true },
		});

		if (comments.length === 0) {
			throw new NotFoundException("Comment not found");
		}

		return {
			message: `Found ${comments.length} comments`,
			data: comments,
		};
	}

	async findOne(id: string) {
		const comment = await this.prismaService.comment.findUnique({
			where: { id },
			include: { replies: true },
		});

		if (!comment) {
			throw new NotFoundException("Comment not found");
		}

		return {
			message: `Fetch comment successfulv`,
			data: comment,
		};
	}

	async update(id: string, body: UpdateCommentDto) {
		const comment = await this.prismaService.comment.findUnique({ where: { id } });

		if (!comment) {
			throw new NotFoundException("Comment not found");
		}

		const newComment = await this.prismaService.comment.update({
			where: { id },
			data: { content: body.content, updateHistories: { push: comment } },
			include: { replies: true, reations: true },
		});

		return {
			message: "Updated comment successful",
			data: newComment,
		};
	}

	async remove(id: string) {
		const comment = await this.prismaService.comment.findUnique({ where: { id } });

		if (!comment) {
			throw new NotFoundException("Comment not found");
		}

		const deleted = await this.prismaService.comment.delete({ where: { id } });

		return {
			message: "Comment deleted successfully",
			data: deleted,
		};
	}
}

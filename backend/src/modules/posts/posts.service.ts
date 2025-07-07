import { Injectable, InternalServerErrorException, UnauthorizedException, NotFoundException } from "@nestjs/common";
import type { CreatePostDto } from "./dto/create-post.dto";
import type { UpdatePostDto } from "./dto/update-post.dto";
import type { QueryPostDto } from "./dto/query-post.dto";
import type { Request } from "express";
import type { PrismaService } from "@/prisma/prisma.service";
import type { SupabaseService } from "@/supabase/supabase.service";
import type { ReactionType } from "prisma/generated";

@Injectable()
export class PostsService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly supabaseService: SupabaseService,
	) {}

	async create(req: Request, body: CreatePostDto, medias: Express.Multer.File[]) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const mediaUrls: string[] = [];
		for (const file of medias) {
			const path = `${req.user.id}/${Date.now()}-${file.originalname}`;
			const { error } = await this.supabaseService.uploadFile(path, file.buffer, {
				contentType: file.mimetype,
			});

			if (error) {
				throw new InternalServerErrorException(`Failed to upload file: ${file.originalname}`);
			}
			const url = this.supabaseService.getPublicUrl(path);
			mediaUrls.push(url);
		}

		const post = await this.prismaService.post.create({
			data: {
				authorId: req.user.id,
				content: body.content,
				medias: mediaUrls,
				scope: body.scope,
				status: "DISPLAY",
			},
			include: { author: true, comments: true, reactions: true },
		});

		return {
			message: "Create post successful",
			data: post,
		};
	}

	async findById(id: string) {
		const post = await this.prismaService.post.findUnique({
			where: {
				id,
				status: "DISPLAY", // Only return active posts
			},
			include: {
				author: true,
				comments: true,
				reactions: true,
			},
		});

		if (!post) {
			throw new NotFoundException("Post not found");
		}

		return {
			message: "Get post successful",
			data: post,
		};
	}

	async findAll(query: QueryPostDto) {
		const { page = 1, limit = 10, search, scope, authorId, sortBy = "createdAt", sortOrder = "desc" } = query;
		const skip = (page - 1) * limit;

		// Build where conditions
		const where: any = {
			status: "DISPLAY", // Only return active posts
		};

		if (search) {
			where.content = {
				contains: search,
				mode: "insensitive",
			};
		}

		if (scope) {
			where.scope = scope;
		}

		if (authorId) {
			where.authorId = authorId;
		}

		const total = await this.prismaService.post.count({ where });

		const posts = await this.prismaService.post.findMany({
			where,
			skip,
			take: limit,
			orderBy: {
				[sortBy]: sortOrder,
			},
			include: {
				author: true,
				comments: true,
				reactions: true,
			},
		});

		const totalPages = Math.ceil(total / limit);

		return {
			message: "Get posts successful",
			data: {
				posts,
				pagination: {
					page,
					limit,
					total,
					totalPages,
					hasNext: page < totalPages,
					hasPrev: page > 1,
				},
			},
		};
	}

	async findByUser(userId: string, query: QueryPostDto) {
		const { page = 1, limit = 10, sortBy = "createdAt", sortOrder = "desc" } = query;
		const skip = (page - 1) * limit;

		const where: any = {
			authorId: userId,
			status: "DISPLAY",
		};

		// Get total count for pagination
		const total = await this.prismaService.post.count({ where });

		// Get posts with pagination
		const posts = await this.prismaService.post.findMany({
			where,
			skip,
			take: limit,
			orderBy: {
				[sortBy]: sortOrder,
			},
			include: {
				author: true,
				comments: true,
				reactions: true,
			},
		});

		const totalPages = Math.ceil(total / limit);

		return {
			message: "Get user posts successful",
			data: {
				posts,
				pagination: {
					page,
					limit,
					total,
					totalPages,
					hasNext: page < totalPages,
					hasPrev: page > 1,
				},
			},
		};
	}

	async findMyPosts(query: QueryPostDto, req: Request) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const { page = 1, limit = 10, sortBy = "createdAt", sortOrder = "desc" } = query;
		const skip = (page - 1) * limit;

		const where: any = {
			authorId: req.user.id,
			status: "DISPLAY",
		};

		// Get total count for pagination
		const total = await this.prismaService.post.count({ where });

		// Get posts with pagination
		const posts = await this.prismaService.post.findMany({
			where,
			skip,
			take: limit,
			orderBy: {
				[sortBy]: sortOrder,
			},
			include: {
				author: true,
				comments: true,
				reactions: true,
			},
		});

		const totalPages = Math.ceil(total / limit);

		return {
			message: "Get my posts successful",
			data: {
				posts,
				pagination: {
					page,
					limit,
					total,
					totalPages,
					hasNext: page < totalPages,
					hasPrev: page > 1,
				},
			},
		};
	}

	async update(id: string, req: Request, updatePostDto: UpdatePostDto, medias: Express.Multer.File[]) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const post = await this.prismaService.post.findUnique({ where: { id } });
		if (!post) {
			throw new NotFoundException("Post not found");
		}
		if (post.authorId !== req.user.id) {
			throw new UnauthorizedException("You are not allowed to edit this post");
		}

		const mediaUrls: string[] = [];
		if (medias && medias.length > 0) {
			for (const file of medias) {
				const path = `${req.user.id}/${Date.now()}-${file.originalname}`;
				const { error } = await this.supabaseService.uploadFile(path, file.buffer, {
					contentType: file.mimetype,
				});

				if (error) {
					throw new InternalServerErrorException(`Failed to upload file: ${file.originalname}`);
				}
				const url = this.supabaseService.getPublicUrl(path);
				mediaUrls.push(url);
			}
		}

		// Handle media updates: remove deleted URLs and add new ones
		let updatedMedias = [...post.medias];

		// Remove URLs that are marked for deletion
		if (updatePostDto.deletedUrls && updatePostDto.deletedUrls.length > 0) {
			updatedMedias = updatedMedias.filter((url) => !updatePostDto.deletedUrls!.includes(url));
		}

		// Add new uploaded media URLs
		if (mediaUrls.length > 0) {
			updatedMedias = [...updatedMedias, ...mediaUrls];
		}

		const updated = await this.prismaService.post.update({
			where: { id },
			data: {
				...updatePostDto,
				medias: updatedMedias,
			},
			include: { author: true, comments: true, reactions: true },
		});

		return {
			message: "Update post successful",
			data: updated,
		};
	}

	async remove(id: string, req: Request) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const post = await this.prismaService.post.findUnique({ where: { id } });
		if (!post) {
			throw new NotFoundException("Post not found");
		}
		if (post.authorId !== req.user.id) {
			throw new UnauthorizedException("You are not allowed to delete this post");
		}

		// Soft delete by updating status to DELETED
		const deleted = await this.prismaService.post.update({
			where: { id },
			data: { status: "DELETED" },
			include: { author: true, comments: true, reactions: true },
		});

		return {
			message: "Delete post successful",
			data: deleted,
		};
	}

	async reactionPost(id: string, req: Request, type: ReactionType) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const post = await this.prismaService.post.findUnique({
			where: { id, status: "DISPLAY" },
		});

		if (!post) {
			throw new NotFoundException("Post not found");
		}

		// Check if user already liked the post
		const existingReaction = await this.prismaService.reaction.findFirst({
			where: {
				postId: id,
				authorId: req.user.id,
			},
		});

		if (existingReaction) {
			throw new UnauthorizedException("You have already liked this post");
		}

		// Create new reaction
		const reaction = await this.prismaService.reaction.create({
			data: {
				postId: id,
				authorId: req.user.id,
				type,
			},
			include: {
				author: true,
			},
		});

		return {
			message: "Post liked successfully",
			data: reaction,
		};
	}

	async unlikePost(id: string, req: Request) {
		if (!req.user) {
			throw new UnauthorizedException("User is not authenticated");
		}

		const post = await this.prismaService.post.findUnique({
			where: { id, status: "DISPLAY" },
		});

		if (!post) {
			throw new NotFoundException("Post not found");
		}

		// Find and delete the reaction
		const reaction = await this.prismaService.reaction.findFirst({
			where: {
				postId: id,
				authorId: req.user.id,
			},
		});

		if (!reaction) {
			throw new NotFoundException("You have not liked this post");
		}

		await this.prismaService.reaction.delete({
			where: { id: reaction.id },
		});

		return {
			message: "Post unliked successfully",
			data: null,
		};
	}

	async getPostStats(id: string) {
		const post = await this.prismaService.post.findUnique({
			where: { id, status: "DISPLAY" },
		});

		if (!post) {
			throw new NotFoundException("Post not found");
		}

		// Get reaction count
		const reactionCount = await this.prismaService.reaction.count({
			where: { postId: id },
		});

		// Get comment count
		const commentCount = await this.prismaService.comment.count({
			where: {
				postId: id,
				status: "DISPLAY",
			},
		});

		return {
			message: "Get post stats successful",
			data: {
				postId: id,
				reactions: reactionCount,
				comments: commentCount,
			},
		};
	}
}

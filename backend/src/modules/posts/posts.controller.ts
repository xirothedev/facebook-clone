import { MediasInterceptor } from "@/common/interceptors/media.interceptor";
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseEnumPipe,
	Patch,
	Post,
	Query,
	Req,
	UploadedFiles,
	UseInterceptors,
} from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import type { Request } from "express";
import { ReactionType } from "prisma/generated";
import type { CreatePostDto } from "./dto/create-post.dto";
import type { QueryPostDto } from "./dto/query-post.dto";
import type { UpdatePostDto } from "./dto/update-post.dto";
import type { PostsService } from "./posts.service";

@ApiTags("Posts")
@Controller("posts")
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Post()
	@ApiOperation({ summary: "Create a new post" })
	@ApiResponse({ status: 201, description: "Post created successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@UseInterceptors(MediasInterceptor("medias"))
	create(@Req() req: Request, @Body() body: CreatePostDto, @UploadedFiles() medias: Express.Multer.File[]) {
		return this.postsService.create(req, body, medias);
	}

	@Get()
	@ApiOperation({ summary: "Get all posts with pagination and filtering" })
	@ApiResponse({ status: 200, description: "Posts retrieved successfully" })
	findAll(@Query() query: QueryPostDto) {
		return this.postsService.findAll(query);
	}

	@Get(":id")
	@ApiOperation({ summary: "Get a post by ID" })
	@ApiParam({ name: "id", description: "Post ID" })
	@ApiResponse({ status: 200, description: "Post retrieved successfully" })
	@ApiResponse({ status: 404, description: "Post not found" })
	findById(@Param("id") id: string) {
		return this.postsService.findById(id);
	}

	@Get("user/:userId")
	@ApiOperation({ summary: "Get posts by user ID" })
	@ApiParam({ name: "userId", description: "User ID" })
	@ApiResponse({ status: 200, description: "User posts retrieved successfully" })
	findByUser(@Param("userId") userId: string, @Query() query: QueryPostDto) {
		return this.postsService.findByUser(userId, query);
	}

	@Get("@me")
	@ApiOperation({ summary: "Get current user posts" })
	@ApiResponse({ status: 200, description: "User posts retrieved successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	findMyPosts(@Query() query: QueryPostDto, @Req() req: Request) {
		return this.postsService.findMyPosts(query, req);
	}

	@Patch(":id")
	@ApiOperation({ summary: "Update a post" })
	@ApiParam({ name: "id", description: "Post ID" })
	@ApiResponse({ status: 200, description: "Post updated successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@ApiResponse({ status: 404, description: "Post not found" })
	@UseInterceptors(MediasInterceptor("medias"))
	update(
		@Param("id") id: string,
		@Req() req: Request,
		@Body() updatePostDto: UpdatePostDto,
		@UploadedFiles() medias: Express.Multer.File[],
	) {
		return this.postsService.update(id, req, updatePostDto, medias);
	}

	@Delete(":id")
	@ApiOperation({ summary: "Delete a post" })
	@ApiParam({ name: "id", description: "Post ID" })
	@ApiResponse({ status: 200, description: "Post deleted successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@ApiResponse({ status: 404, description: "Post not found" })
	remove(@Param("id") id: string, @Req() req: Request) {
		return this.postsService.remove(id, req);
	}

	@Post(":id/reaction")
	@ApiOperation({ summary: "Like a post" })
	@ApiParam({ name: "id", description: "Post ID" })
	@ApiResponse({ status: 201, description: "Post liked successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@ApiResponse({ status: 404, description: "Post not found" })
	reactionPost(
		@Param("id") id: string,
		@Req() req: Request,
		@Body("type", new ParseEnumPipe(ReactionType)) type: ReactionType,
	) {
		return this.postsService.reactionPost(id, req, type);
	}

	@Delete(":id/like")
	@ApiOperation({ summary: "Unlike a post" })
	@ApiParam({ name: "id", description: "Post ID" })
	@ApiResponse({ status: 200, description: "Post unliked successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@ApiResponse({ status: 404, description: "Post not found" })
	unlikePost(@Param("id") id: string, @Req() req: Request) {
		return this.postsService.unlikePost(id, req);
	}

	@Get(":id/stats")
	@ApiOperation({ summary: "Get post statistics" })
	@ApiParam({ name: "id", description: "Post ID" })
	@ApiResponse({ status: 200, description: "Post stats retrieved successfully" })
	@ApiResponse({ status: 404, description: "Post not found" })
	getPostStats(@Param("id") id: string) {
		return this.postsService.getPostStats(id);
	}
}

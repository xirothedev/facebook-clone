import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@ApiTags("Comments")
@Controller("comment")
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Post()
	@ApiOperation({ summary: "Create a new comment" })
	@ApiResponse({ status: 201, description: "Comment created successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@ApiResponse({ status: 400, description: "Bad request" })
	create(@Req() req: Request, @Body() body: CreateCommentDto) {
		return this.commentService.create(req, body);
	}

	@Get(":postId")
	@ApiOperation({ summary: "Get all comments for a post" })
	@ApiParam({ name: "postId", description: "Post ID" })
	@ApiResponse({ status: 200, description: "Comments retrieved successfully" })
	@ApiResponse({ status: 404, description: "Post not found" })
	findAll(@Query("postId") postId: string) {
		return this.commentService.findAll(postId);
	}

	@Get(":id")
	@ApiOperation({ summary: "Get a comment by ID" })
	@ApiParam({ name: "id", description: "Comment ID" })
	@ApiResponse({ status: 200, description: "Comment retrieved successfully" })
	@ApiResponse({ status: 404, description: "Comment not found" })
	findOne(@Param("id") id: string) {
		return this.commentService.findOne(id);
	}

	@Patch(":id")
	@ApiOperation({ summary: "Update a comment" })
	@ApiParam({ name: "id", description: "Comment ID" })
	@ApiResponse({ status: 200, description: "Comment updated successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@ApiResponse({ status: 404, description: "Comment not found" })
	@ApiResponse({ status: 403, description: "Forbidden - not the comment owner" })
	update(@Param("id") id: string, @Body() body: UpdateCommentDto) {
		return this.commentService.update(id, body);
	}

	@Delete(":id")
	@ApiOperation({ summary: "Delete a comment" })
	@ApiParam({ name: "id", description: "Comment ID" })
	@ApiResponse({ status: 200, description: "Comment deleted successfully" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@ApiResponse({ status: 404, description: "Comment not found" })
	@ApiResponse({ status: 403, description: "Forbidden - not the comment owner" })
	remove(@Param("id") id: string) {
		return this.commentService.remove(id);
	}
}

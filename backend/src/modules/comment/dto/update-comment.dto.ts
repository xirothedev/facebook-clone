import type { Comment } from "prisma/generated";

export class UpdateCommentDto implements Partial<Comment> {
	content?: string;
}

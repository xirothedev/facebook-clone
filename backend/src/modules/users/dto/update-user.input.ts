import { Field, ID, InputType } from "@nestjs/graphql";
import type { UserQL } from "../entities/user.entity";
import type { Gender } from "prisma/generated";

@InputType()
export class UpdateUserInput implements Partial<UserQL> {
	@Field(() => ID)
	id: string;

	@Field({ nullable: true })
	profileId?: string;

	@Field({ nullable: true })
	displayName?: string;

	@Field({ nullable: true })
	username?: string;

	@Field({ nullable: true })
	gender?: Gender;

	@Field({ nullable: true })
	pronoun?: string;

	@Field({ nullable: true })
	birthday?: Date;

	@Field({ nullable: true })
	biography?: string;

	@Field(() => [String], { nullable: true })
	websites?: string[];

	@Field({ nullable: true })
	language?: string;
}

import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Friendship {
	@Field()
	requesterId: string;

	@Field()
	addresseeId: string;

	@Field()
	status: string;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}

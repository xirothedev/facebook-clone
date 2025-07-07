import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Email {
	@Field(() => ID)
	id: string;

	@Field()
	value: string;

	@Field()
	scope: string;
}

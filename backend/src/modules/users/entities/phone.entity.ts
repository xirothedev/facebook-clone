import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Phone {
	@Field(() => ID)
	id: string;

	@Field()
	value: string;

	@Field()
	scope: string;
}

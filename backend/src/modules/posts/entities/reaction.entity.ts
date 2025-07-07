import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Reaction {
	@Field(() => ID)
	id: string;
}

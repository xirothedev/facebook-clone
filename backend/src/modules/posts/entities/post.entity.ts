import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Post {
	@Field(() => ID)
	id: string;
}

import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class SocialLinkeds {
  @Field(() => ID)
  id: string;

  @Field()
  platform: string;

  @Field()
  userId: string;
} 
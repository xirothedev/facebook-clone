import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Relation {
  @Field()
  sourceUserId: string;

  @Field()
  targetUserId: string;

  @Field()
  type: string;

  @Field()
  status: string;

  @Field()
  scope: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
} 
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Gender, UserFlag } from 'prisma/generated';
import { registerEnumType } from '@nestjs/graphql';

registerEnumType(UserFlag, {
  name: 'UserFlag',
});

registerEnumType(Gender, {
  name: 'Gender',
}); 

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  profileId: string;

  @Field()
  createdAt: Date;

  @Field()
  updateAt: Date;

  @Field(() => [UserFlag])
  flags: UserFlag[];

  @Field()
  primaryEmailId: string;

  @Field({ nullable: true })
  primaryPhoneId?: string;

  @Field()
  hashedPassword: string;

  @Field()
  displayName: string;

  @Field({ nullable: true })
  username?: string;

  @Field(() => Gender)
  gender: Gender;

  @Field({ nullable: true })
  pronoun?: string;

  @Field()
  birthday: Date;

  @Field({ nullable: true })
  biography?: string;

  @Field(() => [String])
  websites: string[];

  @Field({ nullable: true })
  language?: string;

  @Field({ nullable: true })
  avatarUrl?: string;

  @Field({ nullable: true })
  bannerUrl?: string;
}

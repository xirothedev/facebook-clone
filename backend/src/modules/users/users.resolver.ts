import { Req, UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver, Mutation } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserQL } from './entities/user.entity';
import { UsersService } from './users.service';
import { Email } from './entities/email.entity';
import { Phone } from './entities/phone.entity';
import { SocialLinkeds } from './entities/social-linkeds.entity';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => UserQL)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Query(() => UserQL, { name: 'me' })
  findMe(@Req() req: Request) {
    return this.usersService.findMe(req)
  }

  @Query(() => UserQL, { name: 'user' })
  findUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findUser(id);
  }

  @Query(() => [UserQL], { name: "users" })
  findUsers(@Args('searchstring', { type: () => String }) searchstring: string) {
    return this.usersService.findUsers(searchstring);
  }

  @Mutation(() => UserQL)
  updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.updateUser(id, updateUserInput);
  }

  @ResolveField(() => Email)
  primaryEmail(@Parent() user: UserQL) {
    return this.usersService.getPrimaryEmail(user.id);
  }

  @ResolveField(() => [Email])
  subEmails(@Parent() user: UserQL) {
    return this.usersService.getSubEmails(user.id);
  }

  @ResolveField(() => Phone, { nullable: true })
  primaryPhone(@Parent() user: UserQL) {
    return this.usersService.getPrimaryPhone(user.id);
  }

  @ResolveField(() => [Phone])
  subPhones(@Parent() user: UserQL) {
    return this.usersService.getSubPhones(user.id);
  }

  @ResolveField(() => [SocialLinkeds])
  socialLinkeds(@Parent() user: UserQL) {
    return this.usersService.getSocialLinkeds(user.id);
  }
}

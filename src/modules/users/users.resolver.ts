import { Req, UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { Email } from './entities/email.entity';
import { Phone } from './entities/phone.entity';
import { SocialLinkeds } from './entities/social-linkeds.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Query(() => User, { name: 'me' })
  findMe(@Req() req: Request) {
    return this.usersService.findMe(req)
  }

  @Query(() => User, { name: 'user' })
  findUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findUser(id);
  }

  @Query(() => [User], { name: "users" })
  findUsers(@Args('searchstring', { type: () => String }) searchstring: string) {
    return this.usersService.findUsers(searchstring);
  }

  @ResolveField(() => Email)
  primaryEmail(@Parent() user: User) {
    return this.usersService.getPrimaryEmail(user.id);
  }

  @ResolveField(() => [Email])
  subEmails(@Parent() user: User) {
    return this.usersService.getSubEmails(user.id);
  }

  @ResolveField(() => Phone, { nullable: true })
  primaryPhone(@Parent() user: User) {
    return this.usersService.getPrimaryPhone(user.id);
  }

  @ResolveField(() => [Phone])
  subPhones(@Parent() user: User) {
    return this.usersService.getSubPhones(user.id);
  }

  @ResolveField(() => [SocialLinkeds])
  socialLinkeds(@Parent() user: User) {
    return this.usersService.getSocialLinkeds(user.id);
  }
}

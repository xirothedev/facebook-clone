import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from 'prisma/generated';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) { }

  async findPrimaryUserByEmail(email: string): Promise<User | null> {
    const mail = await this.prismaService.email.findFirst({
      where: {
        value: email,
        NOT: { primaryEmailUser: null },
      },
      include: { primaryEmailUser: true },
    })
  
    return mail?.primaryEmailUser || null
  }

  async findUsersByEmail(email: string): Promise<User[]> {
    const mails = await this.prismaService.email.findMany({
      where: { value: email },
      include: {
        primaryEmailUser: true,
        subEmailsUser: true,
      },
    })
  
    const users: User[] = []
  
    for (const mail of mails) {
      if (mail.primaryEmailUser) users.push(mail.primaryEmailUser)
      if (mail.subEmailsUser) users.push(mail.subEmailsUser)
    }
  
    return users
  }

  findMe(req: Request) {
    return req.user
  }

  async findUser(identify: string) {
    const [user1, user2, user3] = await this.prismaService.$transaction([
      this.prismaService.user.findFirst({
        where: { OR: [{ id: identify }, { profileId: identify }, { username: identify }] }
      }),
      this.prismaService.email.findFirst({ where: { value: identify, NOT: { primaryEmailUser: null } } }),
      this.prismaService.phone.findFirst({ where: { value: identify, NOT: { primaryPhoneUser: null } } })
    ])


    if (!user1 && !user2 && !user3) {
      throw new NotFoundException({ message: "User not found" })
    }

    const user = user1 || user2 || user3

    return user
  }

  async findUsers(searchstring: string) {
    const users = await this.prismaService.user.findMany({
      where: { OR: [{ id: searchstring }, { profileId: searchstring }, { username: searchstring }, { displayName: { contains: searchstring } }] }
    })

    if (users.length === 0) {
      throw new NotFoundException({ message: "No user found" })
    }

    return users
  }

  async updateUser(id: string, updateUserInput: UpdateUserInput) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserInput,
    });
  }

  getPrimaryEmail(id: string) {
    return this.prismaService.email.findFirst({
      where: { primaryEmailUser: { id } },
    });
  }

  getSubEmails(id: string) {
    return this.prismaService.email.findMany({
      where: { subEmailsUser: { id } },
    });
  }

  getPrimaryPhone(id: string) {
    return this.prismaService.phone.findFirst({
      where: { primaryPhoneUser: { id } },
    });
  }

  getSubPhones(id: string) {
    return this.prismaService.phone.findMany({
      where: { subPhonesUser: { id } },
    });
  }

  getSocialLinkeds(id: string) {
    return this.prismaService.socialLinkeds.findMany({
      where: { userId: id },
    });
  }
}

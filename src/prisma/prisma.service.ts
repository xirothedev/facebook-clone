import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy{

  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'event', level: 'error' },
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' },
      ],
      omit: { user: { hashedPassword: true } },
    })
  }

  async onModuleInit(){
    await this.$connect()
  }
  async onModuleDestroy(){
    await this.$disconnect()
  }
}
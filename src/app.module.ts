<<<<<<< HEAD
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { PostsModule } from './modules/posts/posts.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    PostsModule,
  ],
=======
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [AuthModule, UsersModule, PostsModule, PrismaModule, EmailModule],
>>>>>>> 3e6d858 (feat: update Prisma schema to use UUID for user and email identifiers)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

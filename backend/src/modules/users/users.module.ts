import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { UsersController } from "./users.controller";
import { PrismaModule } from "../../prisma/prisma.module";
import { FriendsModule } from "../friends/friends.module";
import { PagesModule } from "../pages/pages.module";

@Module({
	imports: [PrismaModule, FriendsModule, PagesModule],
	providers: [UsersResolver, UsersService],
	controllers: [UsersController],
	exports: [UsersService],
})
export class UsersModule {}

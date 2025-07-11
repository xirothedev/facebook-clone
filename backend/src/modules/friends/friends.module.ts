import { Module } from "@nestjs/common";
import { FriendsService } from "./friends.service";
import { AuthModule } from "../auth/auth.module";
import { FriendsController } from "./friend.controller";

@Module({
	controllers: [FriendsController],
	providers: [FriendsService],
	exports: [FriendsService],
})
export class FriendsModule {}

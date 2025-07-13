import { Module } from "@nestjs/common";
import { FriendsService } from "./friends.service";
import { AuthModule } from "../auth/auth.module";
import { FriendsController } from "./friend.controller";
import { NotificationsModule } from "../notifications/notifications.module";

@Module({
	imports: [NotificationsModule],
	controllers: [FriendsController],
	providers: [FriendsService],
	exports: [FriendsService],
})
export class FriendsModule {}

import { Global, Module } from "@nestjs/common";
import { RedisService } from "./redis.service";
import { ConfigModule } from "@nestjs/config";

@Global()
@Module({
	imports: [ConfigModule], // Thêm dòng này!
	providers: [RedisService],
	exports: [RedisService],
})
export class RedisModule {}

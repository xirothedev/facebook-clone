import { Global, Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";
import { ConfigModule } from "@nestjs/config";

@Global()
@Module({
	imports: [ConfigModule], // Thêm dòng này!
	providers: [SupabaseService],
	exports: [SupabaseService],
})
export class SupabaseModule {}

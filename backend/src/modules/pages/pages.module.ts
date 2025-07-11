import { Module } from "@nestjs/common";
import { PageService } from "./pages.service";

@Module({
	providers: [PageService],
	exports: [PageService],
})
export class PagesModule {}

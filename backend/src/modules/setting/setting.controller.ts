import { Get, Injectable, Post, Query, Req } from "@nestjs/common";
import { Request } from "express";
import { SettingService } from "./setting.service";
import { UpdateAudienceAndVisibilityDto } from "./dto/update-audience-setting.dto";
import { UpdatePreferenceDto } from "./dto/update-preference.dto";
@Injectable()
export class SettingController {
	constructor(private readonly settingService: SettingService) {}

	@Get("get-setting")
	async getSettingUser(@Query("userId") userId: string) {
		return this.settingService.getSetting(userId);
	}

	@Post("update-audience-setting")
	async updateAudienceSetting(@Query("settingId") settingId: string, data: UpdateAudienceAndVisibilityDto) {
		return this.settingService.updateAudienceSetting(settingId, data);
	}

	@Post("update-reference-setting")
	async updateReferenceSetting(@Query("settingId") settingId: string, data: UpdatePreferenceDto) {
		return this.settingService.updateReference(settingId, data);
	}
}

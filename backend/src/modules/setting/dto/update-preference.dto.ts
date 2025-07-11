import { IsOptional, IsEnum, IsBoolean, IsNumber, IsString } from "class-validator";
import { CoLor, NotificationType, PreferenceType, ReactionTarget, VideoQuality } from "prisma/generated";

export class UpdatePreferenceDto {
	@IsOptional()
	@IsEnum(PreferenceType)
	type?: PreferenceType;

	// ===== Notification =====
	@IsOptional()
	@IsEnum(NotificationType)
	notificationType?: NotificationType;

	@IsOptional()
	@IsBoolean()
	push?: boolean;

	@IsOptional()
	@IsBoolean()
	email?: boolean;

	@IsOptional()
	@IsBoolean()
	sms?: boolean;

	// ===== Reaction =====
	@IsOptional()
	@IsEnum(ReactionTarget)
	reactionTarget?: ReactionTarget;

	@IsOptional()
	@IsBoolean()
	hidden?: boolean;

	// ===== Accessibility =====
	@IsOptional()
	@IsBoolean()
	reduceMotion?: boolean;

	@IsOptional()
	@IsBoolean()
	screenReader?: boolean;

	// ===== Language & Region =====
	@IsOptional()
	@IsString()
	languageCode?: string;

	@IsOptional()
	@IsString()
	timezone?: string;

	@IsOptional()
	@IsString()
	locale?: string;

	// ===== Dark Mode =====
	@IsOptional()
	@IsBoolean()
	darkModeEnabled?: boolean;

	// ===== Media Preferences =====
	@IsOptional()
	@IsEnum(VideoQuality)
	videoQuality?: VideoQuality;

	@IsOptional()
	@IsBoolean()
	autoPlayAnimations?: boolean;

	@IsOptional()
	@IsBoolean()
	alwaysShowCaptions?: boolean;

	@IsOptional()
	@IsBoolean()
	quietMode?: boolean;

	// ===== Captions =====
	@IsOptional()
	@IsEnum(CoLor)
	backGroundColor?: CoLor;

	@IsOptional()
	@IsNumber()
	backGroundOpacity?: number;

	@IsOptional()
	@IsEnum(CoLor)
	textColor?: CoLor;

	@IsOptional()
	@IsNumber()
	textSize?: number;
}

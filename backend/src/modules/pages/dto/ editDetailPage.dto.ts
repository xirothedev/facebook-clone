import { Optional } from "@nestjs/common";
import { NameType, RelationShip, Service } from "prisma/generated";

export class EditDetailPage {
	@Optional()
	pictureUrl: string;
	@Optional()
	coverPhotoUrl: string;
	@Optional()
	bio: string;
	@Optional()
	address: string;
	@Optional()
	whatsAppNumber: string;
	@Optional()
	serviceArea: string;
	@Optional()
	email: string;
	@Optional()
	websiteUrl: string;
	@Optional()
	socialUrl: string;
	@Optional()
	service: Service;
	@Optional()
	language: string;
	@Optional()
	birthday: string;
	@Optional()
	privacyPolicyLink: string;
	@Optional()
	impressum: string;
	@Optional()
	placesLived: string;
	@Optional()
	hometown: string;
	@Optional()
	city: string;
	@Optional()
	relationShip: RelationShip;
	@Optional()
	familyMemberId: string;
	@Optional()
	aboutYourself: string;
	@Optional()
	nametype: NameType;
	nickname: string;
	@Optional()
	favoriteQuotes: string;
}

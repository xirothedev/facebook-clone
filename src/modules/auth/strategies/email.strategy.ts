import { ForbiddenException, Injectable } from "@nestjs/common";
import { EmailService } from "src/email/email.service";
import { AuthService } from "../auth.service";

@Injectable()
export class EmailStrategy{

    constructor(
        private readonly authService: AuthService,
        private readonly emailService: EmailService,
    ){}

    async validate(valuePrimaryEmail: string){
        const exitingUser = await this.authService.validate(valuePrimaryEmail)

        if(exitingUser){
            await this.emailService.sendResetPasswordAccount(valuePrimaryEmail,Math.floor(100000 + Math.random() * 900000).toString())
            throw new ForbiddenException('Account is active')
        }
    }
}
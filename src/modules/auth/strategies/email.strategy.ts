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
            const token = Math.floor(100000 + Math.random() * 900000).toString()
            await this.authService.handleAfterRegisterAvailableAccount(exitingUser.id,token)
            await this.emailService.sendResetPasswordAccount(valuePrimaryEmail,token)
            throw new ForbiddenException('Account is active')
        }
    }
}
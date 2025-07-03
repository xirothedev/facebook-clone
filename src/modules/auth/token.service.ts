import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class TokenService {

    constructor(
        private readonly jwtService: JwtService
    ){}

    generateJwtToken(email: string){
        const payload = { sub: email }
        const token = this.jwtService.sign(payload, { expiresIn: '15m' });
        return token
    }
}
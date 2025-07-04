import { IsNotEmpty } from "class-validator";

export class LoginAuth{
    @IsNotEmpty({message: 'Email is not empty'})
    email: string
    @IsNotEmpty({message : 'Password is not empty'})
    password: string
}
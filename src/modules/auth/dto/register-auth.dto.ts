import { IsEmail, IsStrongPassword } from 'class-validator';
import { Matches } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { Email, Gender } from 'prisma/generated';
export class RegisterUser {
    @IsNotEmpty({ message: 'Name is not empty' })
    displayName: string
    @IsNotEmpty({ message: 'Date is not empty' })
    @Matches(/^\d{2}\/\d{2}\/\d{4}$/, {
        message: 'birthDate phải có định dạng dd/MM/yyyy',
    })
    dateOfBirth: string
    @IsNotEmpty({ message: 'Gender is not empty' })
    gender: Gender
    @IsEmail(
    {
        allow_display_name: false,
        require_tld: true
    }
    ,{ message: 'Email is not accepted' })
    valuePrimaryEmail: string
    @IsNotEmpty({ message: 'Password is not empty' })
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }, { message: 'Password is not accepted' })
    password: string
}

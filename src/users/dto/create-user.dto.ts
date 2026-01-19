import { IsString, Min, Max, IsEmail } from "class-validator";


export class CreateUserDto {
    @IsString()
    @Min(5)
    @Max(40)
    name: string;
    @IsString()
    @IsEmail()
    email: string
}

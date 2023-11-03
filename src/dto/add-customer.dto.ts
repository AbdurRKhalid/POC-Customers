import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class AddCustomerDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    type: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsString()
    @IsNotEmpty()
    token: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    email: string;
}
import {
    IsEmpty,
    IsNotEmpty,
    IsString,
    IsNumber,
    Length,
    IsEmail,
    IsPhoneNumber,
    IsAlphanumeric,
    IsAlpha
} from "class-validator";

export class UsuarioCreateDto {
    @IsEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
   // @IsAlpha()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    //@IsAlphanumeric()
    direccion: string;

    @IsNotEmpty()
    @IsString()
    @Length(10)
    // @IsPhoneNumber('EC')
    telefono: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(8,20)
    password: string;

    @IsNumber()
    @IsNotEmpty()
    rolId: number;

}
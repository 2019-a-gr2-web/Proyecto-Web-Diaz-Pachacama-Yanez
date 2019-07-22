import {IsEmpty, IsNotEmpty, IsString, IsNumber} from "class-validator";
import {rolEntity} from "../entity/rol.entity";

export class UsuarioCreateDto {
    @IsEmpty()
    idUsuario:number;

    @IsNotEmpty()
    @IsString()
    user: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    rolId: rolEntity;

}
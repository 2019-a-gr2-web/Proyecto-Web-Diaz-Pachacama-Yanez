import {IsEmpty, IsNotEmpty, IsString, IsNumber, IsOptional} from "class-validator";
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
    @IsOptional()
    rolId: rolEntity;

}
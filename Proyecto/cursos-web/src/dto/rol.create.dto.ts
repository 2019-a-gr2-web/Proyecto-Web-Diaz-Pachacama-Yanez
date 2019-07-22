import {IsEmpty, IsNotEmpty, IsString} from "class-validator";

export class UsuarioCreateDto {
    @IsEmpty()
    idRol:number;

    @IsNotEmpty()
    @IsString()
    tipoRol: string;

}
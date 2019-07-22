import {IsEmpty, IsNotEmpty, IsString, IsNumber, IsOptional} from "class-validator";
import {usuarioEntity} from "../entity/usuario.entity";
export class EstudianteCreateDto {
    @IsEmpty()
    idEstudiante: number;

    @IsNotEmpty()
    @IsString()
    nombreEstudiante: string;

    @IsNotEmpty()
    @IsString()
    direccionEstudiante: string;

    @IsNotEmpty()
    @IsString()
    telefonoEstudiante: string;

    @IsNotEmpty()
    @IsString()
    emailEstudiante: string;

    @IsNumber()
    @IsOptional()
    usuarioId: usuarioEntity;

}
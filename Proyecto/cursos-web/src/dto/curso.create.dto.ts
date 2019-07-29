import {IsEmpty, IsNotEmpty, IsString, IsNumber, IsDate} from "class-validator";

export class CursoCreateDto {
    @IsEmpty()
    idCurso:number;

    @IsNotEmpty()
    @IsString()
    nombreCurso: string;

    @IsNotEmpty()
    @IsDate()
    fechaInicio: Date;

    @IsNotEmpty()
    @IsDate()
    fechaFin: Date;

    @IsNotEmpty()
    @IsNumber()
    usuarioId: number;

    @IsNotEmpty()
    @IsNumber()
    materiaId: number;

}
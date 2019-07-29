import {IsEmpty, IsNotEmpty, IsString, IsNumber, IsOptional} from "class-validator";

export class NotasCreateDto {
    @IsEmpty()
    idNotas:number;

    @IsOptional()
    @IsNumber()
    calificaciones: Number;

    @IsOptional()
    @IsString()
    observaciones: string;

    @IsNotEmpty()
    @IsNumber()
    cursoId: Number;

    @IsNotEmpty()
    @IsNumber()
    usuarioId: Number;

}
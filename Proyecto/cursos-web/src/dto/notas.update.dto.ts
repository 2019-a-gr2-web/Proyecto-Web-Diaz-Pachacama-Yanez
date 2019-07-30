import {IsEmpty, IsNotEmpty, IsString, IsNumber, IsOptional} from "class-validator";

export class NotasUpdateDto {
    @IsNotEmpty()
    @IsNumber()
    idNotas:number;

    @IsNotEmpty()
    @IsNumber()
    calificaciones: Number;

    @IsNotEmpty()
    @IsString()
    observaciones: string;
}
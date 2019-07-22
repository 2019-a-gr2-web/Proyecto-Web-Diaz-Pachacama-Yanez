import { usuarioEntity } from "../entity/usuario.entity";
export declare class EstudianteCreateDto {
    idEstudiante: number;
    nombreEstudiante: string;
    direccionEstudiante: string;
    telefonoEstudiante: string;
    emailEstudiante: string;
    usuarioId: usuarioEntity;
}

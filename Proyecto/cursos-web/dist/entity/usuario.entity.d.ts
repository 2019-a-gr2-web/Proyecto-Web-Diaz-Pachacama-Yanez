import { rolEntity } from "./rol.entity";
import { profesorEntity } from "./profesor.entity";
export declare class usuarioEntity {
    idUsuario: number;
    user: string;
    password: string;
    rolId: rolEntity;
    profesores: profesorEntity[];
    estudiantes: profesorEntity[];
}

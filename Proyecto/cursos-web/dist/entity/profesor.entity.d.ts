import { usuarioEntity } from "./usuario.entity";
import { cursoEntity } from "./curso.entity";
export declare class profesorEntity {
    idProfesor: number;
    nombreProfesor: string;
    direccionProfesor: string;
    telefonoProfesor: string;
    emailProfesor: string;
    usuarioId: usuarioEntity;
    cursos: cursoEntity[];
}

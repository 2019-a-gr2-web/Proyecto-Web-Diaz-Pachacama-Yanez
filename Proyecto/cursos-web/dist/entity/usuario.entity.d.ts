import { rolEntity } from "./rol.entity";
import { cursoEntity } from "./curso.entity";
import { notasEntity } from "./notas.entity";
export declare class usuarioEntity {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
    password: string;
    rolId: rolEntity;
    cursos: cursoEntity[];
    notas: notasEntity[];
}

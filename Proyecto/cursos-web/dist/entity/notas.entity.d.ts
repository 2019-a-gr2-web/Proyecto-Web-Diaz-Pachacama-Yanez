import { cursoEntity } from "./curso.entity";
import { usuarioEntity } from "./usuario.entity";
export declare class notasEntity {
    idNotas: number;
    calificaciones: number;
    observaciones: string;
    cursoId: cursoEntity;
    usuarioId: usuarioEntity;
}

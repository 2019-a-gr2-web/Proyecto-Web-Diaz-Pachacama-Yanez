import { cursoEntity } from "./curso.entity";
import { estudianteEntity } from "./estudiante.entity";
export declare class notasEntity {
    idNotas: number;
    calificaciones: number;
    observaciones: string;
    cursoId: cursoEntity;
    estudianteId: estudianteEntity;
}

import { profesorEntity } from "./profesor.entity";
import { materiaEntity } from "./materia.entity";
import { notasEntity } from "./notas.entity";
export declare class cursoEntity {
    idCurso: number;
    nombreCurso: string;
    fechaInicio: Date;
    fechaFin: Date;
    profesorId: profesorEntity;
    materiaId: materiaEntity;
    notas: notasEntity[];
}

import { materiaEntity } from "./materia.entity";
import { notasEntity } from "./notas.entity";
import { usuarioEntity } from "./usuario.entity";
export declare class cursoEntity {
    idCurso: number;
    nombreCurso: string;
    fechaInicio: Date;
    fechaFin: Date;
    usuarioId: usuarioEntity;
    materiaId: materiaEntity;
    notas: notasEntity[];
}

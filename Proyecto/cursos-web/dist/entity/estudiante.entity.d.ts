import { usuarioEntity } from "./usuario.entity";
import { notasEntity } from "./notas.entity";
export declare class estudianteEntity {
    idEstudiante: number;
    nombreEstudiante: string;
    direccionEstudiante: string;
    telefonoEstudiante: string;
    emailEstudiante: string;
    usuarioId: usuarioEntity;
    notas: notasEntity[];
}

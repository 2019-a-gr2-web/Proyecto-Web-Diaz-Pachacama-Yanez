import { Estudiante } from "./interfaces/estudiante";
import { Usuario } from "./interfaces/usuario";
export declare class AppService {
    getHello(): string;
    crear(nuevoEstudiante: Estudiante, nuevoUsuario: Usuario): Promise<Estudiante>;
}

import { AppService } from './app.service';
import { Usuario } from "./interfaces/usuario";
import { Curso } from "./interfaces/curso";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    registro(res: any): void;
    registrarPost(usuario: Usuario, res: any): Promise<void>;
    iniciarSesion(res: any): void;
    iniciarSesionPost(usuario: any, session: any, res: any): Promise<void>;
    logout(res: any, session: any): void;
    bienvenida(session: any, res: any): void;
    crearCurso(session: any, res: any): Promise<void>;
    crearCursoPost(curso: Curso, session: any, res: any): Promise<void>;
    buscarCursos(session: any, res: any): void;
    verCurso(session: any, param: any, res: any): Promise<void>;
    misCursos(session: any, res: any): void;
    administrarCurso(session: any, res: any): Promise<void>;
    cursosDisponibles(session: any, res: any): Promise<void>;
    verCursoEst(session: any, param: any, res: any): Promise<void>;
    verCursoEstPost(session: any, registroCurso: any, res: any): Promise<void>;
}

import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    registro(res: any): void;
    iniciarSesion(res: any): void;
    bienvenida(res: any): void;
    cursosDisponibles(res: any): void;
    buscarCursos(res: any): void;
    verCurso(res: any): void;
    misCursos(res: any): void;
}

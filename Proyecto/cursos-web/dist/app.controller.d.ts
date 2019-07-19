import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    menu(res: any): void;
    registro(res: any): void;
    iniciarSesion(res: any): void;
}

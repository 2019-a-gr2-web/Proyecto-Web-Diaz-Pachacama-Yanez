import { Usuario } from "./interfaces/usuario";
import { Repository } from "typeorm";
import { usuarioEntity } from "./entity/usuario.entity";
export declare class AppService {
    private readonly _usuarioRepository;
    constructor(_usuarioRepository: Repository<usuarioEntity>);
    crear(nuevoUsuario: Usuario): Promise<usuarioEntity>;
}

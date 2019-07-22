import { rolEntity } from "../entity/rol.entity";
export declare class UsuarioCreateDto {
    idUsuario: number;
    user: string;
    password: string;
    rolId: rolEntity;
}

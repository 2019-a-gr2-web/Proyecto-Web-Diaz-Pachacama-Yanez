import { Usuario } from "./interfaces/usuario";
import { Curso } from "./interfaces/curso";
import { Notas } from "./interfaces/notas";
import { Repository } from "typeorm";
import { usuarioEntity } from "./entity/usuario.entity";
import { materiaEntity } from "./entity/materia.entity";
import { cursoEntity } from "./entity/curso.entity";
import { notasEntity } from "./entity/notas.entity";
export declare class AppService {
    private readonly _usuarioRepository;
    private readonly _materiaRepository;
    private readonly _cursoRepository;
    private readonly _notasRepository;
    constructor(_usuarioRepository: Repository<usuarioEntity>, _materiaRepository: Repository<materiaEntity>, _cursoRepository: Repository<cursoEntity>, _notasRepository: Repository<notasEntity>);
    crear(nuevoUsuario: Usuario): Promise<usuarioEntity>;
    crearCurso(nuevoCurso: Curso): Promise<cursoEntity>;
    crearNotas(nuevaNota: Notas): Promise<notasEntity>;
    buscar(parametrosBusqueda?: any): Promise<usuarioEntity[]>;
    buscarMateria(parametrosBusqueda?: any): Promise<materiaEntity[]>;
    buscarCurso(parametrosBusqueda?: any): Promise<cursoEntity[]>;
    buscarNotas(parametrosBusqueda?: any): Promise<notasEntity[]>;
}

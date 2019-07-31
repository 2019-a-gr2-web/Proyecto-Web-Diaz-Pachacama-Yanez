import { Injectable } from '@nestjs/common';
import {Usuario} from "./interfaces/usuario";
import {Curso} from "./interfaces/curso";
import {Notas} from "./interfaces/notas";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {usuarioEntity} from "./entity/usuario.entity";
import {materiaEntity} from "./entity/materia.entity";
import {cursoEntity} from "./entity/curso.entity";
import {notasEntity} from "./entity/notas.entity";

@Injectable()
export class AppService {
  bddBusquedaM:cursoEntity[]=[];
  constructor(@InjectRepository(usuarioEntity)
              private readonly _usuarioRepository: Repository<usuarioEntity>,
              @InjectRepository(materiaEntity)
              private readonly _materiaRepository: Repository<materiaEntity>,
              @InjectRepository(cursoEntity)
              private readonly _cursoRepository: Repository<cursoEntity>,
              @InjectRepository(notasEntity)
              private readonly _notasRepository: Repository<notasEntity>,){
    }

  crear(nuevoUsuario:Usuario): Promise<usuarioEntity>{
    // @ts-ignore
    const objetoEntidad = this._usuarioRepository.create(nuevoUsuario);
    return this._usuarioRepository.save(objetoEntidad); //promesa
  }

  crearCurso(nuevoCurso:Curso): Promise<cursoEntity>{

    // @ts-ignore
    const objetoEntidad = this._cursoRepository.create(nuevoCurso);
    return this._cursoRepository.save(objetoEntidad); //promesa
  }

  crearNotas(nuevaNota:Notas): Promise<notasEntity>{

    // @ts-ignore
    const objetoEntidad = this._notasRepository.create(nuevaNota);
    return this._notasRepository.save(objetoEntidad); //promesa
  }

  buscar(parametrosBusqueda?):Promise<usuarioEntity[]>{
    return this._usuarioRepository.find(parametrosBusqueda);
  }

  buscarMateria(parametrosBusqueda?):Promise<materiaEntity[]>{
    return this._materiaRepository.find(parametrosBusqueda);
  }

  buscarCurso(parametrosBusqueda?):Promise<cursoEntity[]>{
    return this._cursoRepository.find(parametrosBusqueda);
  }

  buscarNotas(parametrosBusqueda?):Promise<notasEntity[]>{
    return this._notasRepository.find(parametrosBusqueda);
  }

  async actualizarNotass(idNotas: number, calificaciones:number,observaciones:string):Promise<notasEntity>{
    let notasToUpdate = await this._notasRepository.findOne(idNotas);
    notasToUpdate.calificaciones = calificaciones;
    notasToUpdate.observaciones = observaciones;
    return this._notasRepository.save(notasToUpdate);
  }

}

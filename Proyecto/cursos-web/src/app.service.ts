import { Injectable } from '@nestjs/common';
import {Usuario} from "./interfaces/usuario";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {usuarioEntity} from "./entity/usuario.entity";

@Injectable()
export class AppService {
  constructor(@InjectRepository(usuarioEntity)
              private readonly _usuarioRepository: Repository<usuarioEntity>,){
    }

  crear( nuevoUsuario:Usuario): Promise<usuarioEntity>{

    const objetoEntidad = this._usuarioRepository.create(nuevoUsuario);
    return this._usuarioRepository.save(objetoEntidad); //promesa
  }

}

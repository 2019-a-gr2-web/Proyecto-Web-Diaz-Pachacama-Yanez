import { Injectable } from '@nestjs/common';
import {Estudiante} from "./interfaces/estudiante";
import {Usuario} from "./interfaces/usuario";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  crear(nuevoEstudiante: Estudiante, nuevoUsuario:Usuario): Promise<Estudiante>{

    //nuevoTrago.id = this.recnum;
    //this.recnum++;
    //this.bddTragos.push(nuevoTrago);
    //return nuevoTrago;
    const objetoEntidad = this._tragosRepository.create(nuevoTrago);
    return this._tragosRepository.save(objetoEntidad); //promesa
  }

}

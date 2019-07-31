import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {materiaEntity} from "./entity/materia.entity";
import {notasEntity} from "./entity/notas.entity";
//import {estudianteEntity} from "./entity/estudiante.entity";
//import {profesorEntity} from "./entity/profesor.entity";
import {usuarioEntity} from "./entity/usuario.entity";
import {rolEntity} from "./entity/rol.entity";
import {cursoEntity} from "./entity/curso.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root',
    database: 'proyecto',
    entities: [materiaEntity,notasEntity,usuarioEntity,rolEntity,cursoEntity], //estudianteEntity,profesorEntity
    synchronize: true,
    dropSchema: false
  }), TypeOrmModule.forFeature(
      [
        materiaEntity,notasEntity,usuarioEntity,rolEntity,cursoEntity //estudianteEntity,profesorEntity
      ],
      'default'
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

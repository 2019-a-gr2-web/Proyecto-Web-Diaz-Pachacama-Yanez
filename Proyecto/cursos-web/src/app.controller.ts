import {Controller, Get, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/proyecto')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/registro')
  registro(@Res() res){
    res.render('registro')
  }

  @Get('/iniciarSesion')
  iniciarSesion(@Res() res){
    res.render('iniciarSesion')
  }

  @Get('/bienvenida')
  bienvenida(@Res() res){
    res.render('bienvenida')
  }

  @Get('/cursosDisponibles')
  cursosDisponibles(@Res() res){
    res.render('cursosDisponibles')
  }

  @Get('/buscarCursos')
  buscarCursos(@Res() res){
    res.render('buscarCursos')
  }

  @Get('/verCurso')
  verCurso(@Res() res){
    res.render('verCurso')
  }

  @Get('/misCursos')
  misCursos(@Res() res){
    res.render('misCursos')
  }
}

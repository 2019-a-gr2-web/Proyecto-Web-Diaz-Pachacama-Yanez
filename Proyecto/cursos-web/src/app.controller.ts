import {Controller, Get, Post, Res,Body} from '@nestjs/common';
import { AppService } from './app.service';
import {Usuario} from "./interfaces/usuario";
import {UsuarioCreateDto} from "./dto/usuario.create.dto";
import {validate} from "class-validator";


@Controller('/proyecto')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/registro')
  registro(@Res() res){
    res.render('registro')
  }

  @Post('registro')
  async registrarPost(
      @Body() usuario: Usuario,
      @Res() res

  ) {
    usuario.rolId = Number(usuario.rolId);

    let usuarioAValidar = new UsuarioCreateDto();

    usuarioAValidar.nombre = usuario.nombre;
    usuarioAValidar.direccion = usuario.direccion;
    usuarioAValidar.telefono = usuario.telefono;
    usuarioAValidar.email = usuario.email;
    usuarioAValidar.password = usuario.password;
    usuarioAValidar.rolId = usuario.rolId;
    try {
      const errores = await validate(usuarioAValidar);
      console.log(errores);
      console.log(usuarioAValidar);
      console.log(usuario);
      if (errores.length > 0) {
        console.error(errores);
        res.redirect('/proyecto/registro');
      } else {
        const respuestaCrear = await this.appService.crear(usuario);
        console.log('Respues: ', respuestaCrear);
        res.redirect('/proyecto/bienvenida');
      }

    } catch (e) {
      console.error(e);
      res.status(500);
      res.send({mensaje: 'Error', codigo: 500});
    }

    console.log(usuario);
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

import {Controller, Get, Post, Res, Body, Session, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {Usuario} from "./interfaces/usuario";
import {Curso} from "./interfaces/curso";
import {UsuarioCreateDto} from "./dto/usuario.create.dto";
import {CursoCreateDto} from "./dto/curso.create.dto";
import {validate} from "class-validator";
import {NotasCreateDto} from "./dto/notas.create.dto";


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
        res.redirect('/proyecto/iniciarSesion');
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

  @Post('/iniciarSesion')
  async iniciarSesionPost(@Body() usuario,
                    @Session() session,
                    @Res() res){
    const arregloUsuario = await this.appService.buscar({relations:["rolId"]});
    arregloUsuario.forEach((datosUsuario)=>{
      if(usuario.tipoUsuario==datosUsuario.rolId.idRol&&usuario.usuario==datosUsuario.email&&usuario.password==datosUsuario.password){
        session.username=datosUsuario.nombre;
        session.rol=datosUsuario.rolId.idRol;
        session.userId=datosUsuario.id;
      }else{
        session.username='undefined';
      }
    })
    if(session.username==='undefined'){
      res.redirect('iniciarSesion');
    }else{
      res.redirect('bienvenida');
    }
  }

  @Get('logout')
  logout(
      @Res() res,
      @Session() session
  ){
    session.username=undefined;
    session.rol=undefined;
    session.destroy();
    res.redirect('iniciarSesion');
  }

  @Get('/bienvenida')
  bienvenida(@Session() session,
             @Res() res){
    if(session.username){
      res.render('bienvenida',{
        nombre:session.username,rol:session.rol});
    }else{
      res.redirect('iniciarSesion');
    }
  }

  @Get('/crearCurso')
  async crearCurso(@Session() session,
                    @Res() res){
    const arregloMateria = await this.appService.buscarMateria();
    if(session.username){
      res.render('crearCurso',{
        nombre:session.username, arrayMateria:arregloMateria});
    }else{
      res.redirect('iniciarSesion');
    }
  }

  @Post('crearCurso')
  async crearCursoPost(
      @Body() curso: Curso,
      @Session() session,
      @Res() res

  ) {
    curso.usuarioId = Number(session.userId);
    curso.materiaId = Number(curso.materiaId);
    curso.fechaInicio = curso.fechaInicio ? new Date(curso.fechaInicio) : undefined;
    curso.fechaFin = curso.fechaFin ? new Date(curso.fechaFin) : undefined;

    let cursoAValidar = new CursoCreateDto();

    cursoAValidar.nombreCurso = curso.nombreCurso;
    cursoAValidar.fechaInicio = curso.fechaInicio;
    cursoAValidar.fechaFin = curso.fechaFin;
    cursoAValidar.materiaId = curso.materiaId;
    cursoAValidar.usuarioId = curso.usuarioId;
    try {
      const errores = await validate(cursoAValidar);
      console.log(errores);
      console.log(cursoAValidar);
      console.log(curso);
      if (errores.length > 0) {
        console.error(errores);
        res.redirect('/proyecto/crearCurso');
      } else {
        const respuestaCrear = await this.appService.crearCurso(curso);
        console.log('Respues: ', respuestaCrear);
        res.redirect('/proyecto/administrarCurso');
      }

    } catch (e) {
      console.error(e);
      res.status(500);
      res.send({mensaje: 'Error', codigo: 500});
    }

    console.log(curso);
  }

  @Get('/buscarCursos')
  buscarCursos(@Session() session,
               @Res() res){
    if(session.username){
      res.render('buscarCursos',{
        nombre:session.username});
    }else{
      res.redirect('iniciarSesion');
    }
  }


  @Get('/verCurso/:idCurso')
  async verCurso(@Session() session,
                 @Param() param,
                 @Res() res){
    const arregloNotas = await this.appService.buscar({relations:["cursoId","usuarioId"],where:{cursoId:{idCurso:param.idCurso}}});
    if(session.username){
      res.render('verCurso',{
        nombre:session.username,arrayNotas:arregloNotas});
    }else{
      res.redirect('iniciarSesion');
    }
  }

  @Get('/misCursos')
  misCursos(@Session() session,
            @Res() res){
    if(session.username){
      res.render('misCursos',{
        nombre:session.username});
    }else{
      res.redirect('iniciarSesion');
    }
  }

  @Get('/administrarCurso')
  async administrarCurso(@Session() session,
            @Res() res){
    const arregloCurso = await this.appService.buscarCurso({relations:["materiaId","usuarioId"],where:{usuarioId:{id:session.username}}});
    if(session.username){
      res.render('administrarCurso',{
        nombre:session.username, arrayCurso:arregloCurso});
    }else{
      res.redirect('iniciarSesion');
    }
  }

  @Get('/cursosDisponibles')
  async cursosDisponibles(@Session() session,
                    @Res() res){
    const arregloCurso = await this.appService.buscarCurso({relations:["materiaId"]});
    if(session.username){
      res.render('cursosDisponibles',{
        nombre:session.username,arrayCurso:arregloCurso});
    }else{
      res.redirect('iniciarSesion');
    }
  }

  @Get('/verCursoEst/:idCurso')
  async verCursoEst(@Session() session,
                     @Param() param,
                     @Res() res){
    const arregloCurso = await this.appService.buscarCurso({relations:["materiaId"],where:{idCurso:param.idCurso}});
    if(session.username){
      res.render('verCursoEst',{
        nombre:session.username,id:session.userId,arrayCurso:arregloCurso});
    }else{
      res.redirect('iniciarSesion');
    }
  }

  @Post('/verCursoEstudiante')
  async verCursoEstPost(@Session() session,
              @Body() registroCurso,
              @Res() res) {
    if (session.username) {
      registroCurso.cursoId = Number(registroCurso.cursoId);
      registroCurso.usuarioId= Number(registroCurso.usuarioId);

      let notasAValidar = new NotasCreateDto();

      notasAValidar.cursoId = registroCurso.cursoId;
      notasAValidar.usuarioId = registroCurso.usuarioId;
      try {
        const errores = await validate(notasAValidar);
        console.log(errores);
        console.log(notasAValidar);
        console.log(registroCurso);
        if (errores.length > 0) {
          console.error(errores);
          res.redirect('/proyecto/verCursoEst/'+registroCurso.cursoId);
        } else {
          const respuestaCrear = await this.appService.crearNotas(registroCurso);
          console.log('Respues: ', respuestaCrear);
          res.redirect('/proyecto/misCursos');
        }

      } catch (e) {
        console.error(e);
        res.status(500);
        res.send({mensaje: 'Error', codigo: 500});
      }
    } else {
      res.redirect('iniciarSesion');
    }
  }
}

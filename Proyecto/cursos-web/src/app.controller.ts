import {Controller, Get, Post, Res, Body, Session, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {Usuario} from "./interfaces/usuario";
import {Curso} from "./interfaces/curso";
import {UsuarioCreateDto} from "./dto/usuario.create.dto";
import {CursoCreateDto} from "./dto/curso.create.dto";
import {validate} from "class-validator";
import {NotasCreateDto} from "./dto/notas.create.dto";
import {NotasUpdateDto} from "./dto/notas.update.dto";


@Controller('/proyecto')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/registro')
  registro(@Res() res, @Query() query){
    res.render('registro', {mensaje: query.m})
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
        res.redirect('/proyecto/registro?m=Error-de-Registro');
      } else {
        await this.appService.crear(usuario);
        // const respuestaCrear = await this.appService.crear(usuario);
        // console.log('Respues: ', respuestaCrear);
        res.redirect('/proyecto/iniciarSesion?m=URE');
      }

    } catch (e) {
      console.error(e);
      res.status(500);
      res.send({mensaje: 'Error', codigo: 500});
    }

    console.log(usuario);
  }

  @Get('/iniciarSesion')
  iniciarSesion(@Res() res, @Query() query){
    res.render('iniciarSesion',{mensaje: query.m})
  }

  @Post('/iniciarSesion')
  async iniciarSesionPost(@Body() usuario,
                    @Session() session,
                    @Res() res){
    const arregloUsuario = await this.appService.buscar({relations:["rolId"],where:{rolId:{idRol:usuario.tipoUsuario},email:usuario.usuario,password:usuario.password}});
    arregloUsuario.forEach((datosUsuario)=>{
      if(datosUsuario.nombre){
        session.username=datosUsuario.nombre;
        session.rol=datosUsuario.rolId.idRol;
        session.userId=datosUsuario.id;
      }else{
        session.username='undefined';
      }
    });
    if(session.username==='undefined'){
      res.redirect('/proyecto/iniciarSesion?m=EFL');
    }else{
      res.redirect('/proyecto/bienvenida');
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
    res.redirect('/proyecto/iniciarSesion');
  }

  @Get('/bienvenida')
  bienvenida(@Session() session,
             @Res() res){
    if(session.username){
      res.render('bienvenida',{
        nombre:session.username,rol:session.rol});
    }else{
      res.redirect('/proyecto/iniciarSesion');
    }
  }

  @Get('/crearCurso')
  async crearCurso(@Session() session,
                    @Res() res, @Query() q){
    const arregloMateria = await this.appService.buscarMateria();
    if(session.username){
      res.render('crearCurso',{
        nombre:session.username, arrayMateria:arregloMateria, mensaje: q.m});
    }else{
      res.redirect('/proyecto/iniciarSesion');
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
        res.redirect('/proyecto/crearCurso?m=Error');
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


  @Get('/verCurso/:idCurso')
  async verCurso(@Session() session,
                 @Param() param,
                 @Res() res){
    const arregloNotas = await this.appService.buscar({relations:["cursoId","usuarioId"],where:{cursoId:{idCurso:param.idCurso}}});
    if(session.username){
      res.render('verCurso',{
        nombre:session.username,arrayNotas:arregloNotas});
    }else{
      res.redirect('/proyecto/iniciarSesion');
    }
  }

  @Get('/administrarCurso')
  async administrarCurso(@Session() session,
            @Res() res){
    const arregloCurso = await this.appService.buscarCurso({relations:["materiaId","usuarioId"],where:{usuarioId:{id:session.userId}}});
    if(session.username){
      res.render('administrarCurso',{
        nombre:session.username, arrayCurso:arregloCurso});
    }else{
      res.redirect('/proyecto/iniciarSesion');
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
      res.redirect('/proyecto/iniciarSesion');
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
      res.redirect('/proyecto/iniciarSesion');
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
      res.redirect('/proyecto/iniciarSesion');
    }
  }

  @Get('/misCursos')
  async misCursos(@Session() session,
                          @Res() res){
    const arregloNotas = await this.appService.buscarNotas({relations:["usuarioId","cursoId"],where:{usuarioId: {id:session.userId}}});
    if(session.username){
      res.render('misCursos',{
        nombre:session.username,arrayNotas:arregloNotas});
    }else{
      res.redirect('/proyecto/iniciarSesion');
    }
  }

  @Get('/verCursoP/:idCurso')
  async verCursoP(@Session() session,
                    @Param() param,
                    @Res() res, @Query() q){
    const arregloNotas = await this.appService.buscarNotas({relations:["cursoId","usuarioId"],where:{cursoId:{idCurso:param.idCurso}}});
    if(session.username){
      res.render('verCurso',{
        nombre:session.username,id:session.userId,arrayNotas:arregloNotas, mensaje: q.m});
    }else{
      res.redirect('/proyecto/iniciarSesion');
    }
  }

  @Post('/calificar')
  async calificar(@Session() session,
                        @Body() parametrosCalificar,
                        @Res() res) {
    if (session.username) {
      parametrosCalificar.idCurso = Number(parametrosCalificar.idCurso);
      parametrosCalificar.idNota = Number(parametrosCalificar.idNota);
      parametrosCalificar.calificaciones= Number(parametrosCalificar.calificaciones);
      if (parametrosCalificar.calificaciones > 10 || parametrosCalificar.calificaciones < 0 ){
        parametrosCalificar.calificaciones = undefined;
      }
      let notasAValidar = new NotasUpdateDto();
      notasAValidar.idNotas =parametrosCalificar.idNota;
      notasAValidar.calificaciones = parametrosCalificar.calificaciones;
      notasAValidar.observaciones = parametrosCalificar.observaciones;
      try {
        const errores = await validate(notasAValidar);
        console.log(errores);
        console.log(notasAValidar);
        console.log(parametrosCalificar);
        if (errores.length > 0) {
          console.error(errores);
          res.redirect('/proyecto/verCursoP/'+parametrosCalificar.idCurso + '?m=Error');
        } else {
          const respuestaCrear = await this.appService.actualizarNotass(parametrosCalificar.idNota,parametrosCalificar.calificaciones,parametrosCalificar.observaciones);
          console.log('Respues: ', respuestaCrear);
          res.redirect('/proyecto/verCursoP/'+parametrosCalificar.idCurso);
        }

      } catch (e) {
        console.error(e);
        res.status(500);
        res.send({mensaje: 'Error', codigo: 500});
      }
    } else {
      res.redirect('/proyecto/iniciarSesion');
    }
  }

  @Post('/busqueda')
  async busqueda(@Res() res, @Body() buscar:string){
    if(buscar['buscar']===''){
      res.redirect('/proyecto/cursosDisponibles')
    }
    this.appService.bddBusquedaM.splice(0,this.appService.bddBusquedaM.length);
    const arregloCurso = await this.appService.buscarCurso({relations:["materiaId"],where:[{nombreCurso:buscar['buscar']},{materiaId:{nombreMateria:buscar['buscar']}}]});
    arregloCurso.forEach((curso)=>{
      this.appService.bddBusquedaM.push(curso);
    })
    res.redirect('/proyecto/cursosDisponiblesB');
  }

  @Get('/cursosDisponiblesB')
  cursosDisponiblesB(@Res() res, @Session() session){
    if(session.username) {
      const arregloCurso = this.appService.bddBusquedaM;
      res.render('cursosDisponibles',{
        nombre:session.username,arrayCurso:arregloCurso});
    }else{
      res.redirect('/proyecto/iniciarSesion')
    }
  }

}

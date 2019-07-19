import {Controller, Get, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/proyecto')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/menu')
  menu(@Res() res){
    res.render('menu')
  }

  @Get('/registro')
  registro(@Res() res){
    res.render('registro')
  }

  @Get('/iniciarSesion')
  iniciarSesion(@Res() res){
    res.render('iniciarSesion')
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const usuario_create_dto_1 = require("./dto/usuario.create.dto");
const curso_create_dto_1 = require("./dto/curso.create.dto");
const class_validator_1 = require("class-validator");
const notas_create_dto_1 = require("./dto/notas.create.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    registro(res) {
        res.render('registro');
    }
    registrarPost(usuario, res) {
        return __awaiter(this, void 0, void 0, function* () {
            usuario.rolId = Number(usuario.rolId);
            let usuarioAValidar = new usuario_create_dto_1.UsuarioCreateDto();
            usuarioAValidar.nombre = usuario.nombre;
            usuarioAValidar.direccion = usuario.direccion;
            usuarioAValidar.telefono = usuario.telefono;
            usuarioAValidar.email = usuario.email;
            usuarioAValidar.password = usuario.password;
            usuarioAValidar.rolId = usuario.rolId;
            try {
                const errores = yield class_validator_1.validate(usuarioAValidar);
                console.log(errores);
                console.log(usuarioAValidar);
                console.log(usuario);
                if (errores.length > 0) {
                    console.error(errores);
                    res.redirect('/proyecto/registro');
                }
                else {
                    const respuestaCrear = yield this.appService.crear(usuario);
                    console.log('Respues: ', respuestaCrear);
                    res.redirect('/proyecto/iniciarSesion');
                }
            }
            catch (e) {
                console.error(e);
                res.status(500);
                res.send({ mensaje: 'Error', codigo: 500 });
            }
            console.log(usuario);
        });
    }
    iniciarSesion(res) {
        res.render('iniciarSesion');
    }
    iniciarSesionPost(usuario, session, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arregloUsuario = yield this.appService.buscar({ relations: ["rolId"] });
            arregloUsuario.forEach((datosUsuario) => {
                if (usuario.tipoUsuario == datosUsuario.rolId.idRol && usuario.usuario == datosUsuario.email && usuario.password == datosUsuario.password) {
                    session.username = datosUsuario.nombre;
                    session.rol = datosUsuario.rolId.idRol;
                    session.userId = datosUsuario.id;
                }
                else {
                    session.username = 'undefined';
                }
            });
            if (session.username === 'undefined') {
                res.redirect('iniciarSesion');
            }
            else {
                res.redirect('bienvenida');
            }
        });
    }
    logout(res, session) {
        session.username = undefined;
        session.rol = undefined;
        session.destroy();
        res.redirect('iniciarSesion');
    }
    bienvenida(session, res) {
        if (session.username) {
            res.render('bienvenida', {
                nombre: session.username, rol: session.rol
            });
        }
        else {
            res.redirect('iniciarSesion');
        }
    }
    crearCurso(session, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arregloMateria = yield this.appService.buscarMateria();
            if (session.username) {
                res.render('crearCurso', {
                    nombre: session.username, arrayMateria: arregloMateria
                });
            }
            else {
                res.redirect('iniciarSesion');
            }
        });
    }
    crearCursoPost(curso, session, res) {
        return __awaiter(this, void 0, void 0, function* () {
            curso.usuarioId = Number(session.userId);
            curso.materiaId = Number(curso.materiaId);
            curso.fechaInicio = curso.fechaInicio ? new Date(curso.fechaInicio) : undefined;
            curso.fechaFin = curso.fechaFin ? new Date(curso.fechaFin) : undefined;
            let cursoAValidar = new curso_create_dto_1.CursoCreateDto();
            cursoAValidar.nombreCurso = curso.nombreCurso;
            cursoAValidar.fechaInicio = curso.fechaInicio;
            cursoAValidar.fechaFin = curso.fechaFin;
            cursoAValidar.materiaId = curso.materiaId;
            cursoAValidar.usuarioId = curso.usuarioId;
            try {
                const errores = yield class_validator_1.validate(cursoAValidar);
                console.log(errores);
                console.log(cursoAValidar);
                console.log(curso);
                if (errores.length > 0) {
                    console.error(errores);
                    res.redirect('/proyecto/crearCurso');
                }
                else {
                    const respuestaCrear = yield this.appService.crearCurso(curso);
                    console.log('Respues: ', respuestaCrear);
                    res.redirect('/proyecto/administrarCurso');
                }
            }
            catch (e) {
                console.error(e);
                res.status(500);
                res.send({ mensaje: 'Error', codigo: 500 });
            }
            console.log(curso);
        });
    }
    buscarCursos(session, res) {
        if (session.username) {
            res.render('buscarCursos', {
                nombre: session.username
            });
        }
        else {
            res.redirect('iniciarSesion');
        }
    }
    verCurso(session, param, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arregloNotas = yield this.appService.buscar({ relations: ["cursoId", "usuarioId"], where: { cursoId: { idCurso: param.idCurso } } });
            if (session.username) {
                res.render('verCurso', {
                    nombre: session.username, arrayNotas: arregloNotas
                });
            }
            else {
                res.redirect('iniciarSesion');
            }
        });
    }
    misCursos(session, res) {
        if (session.username) {
            res.render('misCursos', {
                nombre: session.username
            });
        }
        else {
            res.redirect('iniciarSesion');
        }
    }
    administrarCurso(session, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arregloCurso = yield this.appService.buscarCurso({ relations: ["materiaId", "usuarioId"], where: { usuarioId: { id: session.username } } });
            if (session.username) {
                res.render('administrarCurso', {
                    nombre: session.username, arrayCurso: arregloCurso
                });
            }
            else {
                res.redirect('iniciarSesion');
            }
        });
    }
    cursosDisponibles(session, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arregloCurso = yield this.appService.buscarCurso({ relations: ["materiaId"] });
            if (session.username) {
                res.render('cursosDisponibles', {
                    nombre: session.username, arrayCurso: arregloCurso
                });
            }
            else {
                res.redirect('iniciarSesion');
            }
        });
    }
    verCursoEst(session, param, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arregloCurso = yield this.appService.buscarCurso({ relations: ["materiaId"], where: { idCurso: param.idCurso } });
            if (session.username) {
                res.render('verCursoEst', {
                    nombre: session.username, id: session.userId, arrayCurso: arregloCurso
                });
            }
            else {
                res.redirect('iniciarSesion');
            }
        });
    }
    verCursoEstPost(session, registroCurso, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (session.username) {
                registroCurso.idCurso = Number(registroCurso.idCurso);
                let notasAValidar = new notas_create_dto_1.NotasCreateDto();
                notasAValidar.cursoId = registroCurso.cursoId;
                notasAValidar.usuarioId = registroCurso.usuarioId;
                try {
                    const errores = yield class_validator_1.validate(notasAValidar);
                    console.log(errores);
                    console.log(notasAValidar);
                    console.log(registroCurso);
                    if (errores.length > 0) {
                        console.error(errores);
                        res.redirect('/proyecto/verCursoEst');
                    }
                    else {
                        const respuestaCrear = yield this.appService.crearNotas(registroCurso);
                        console.log('Respues: ', respuestaCrear);
                        res.redirect('/proyecto/misCursos');
                    }
                }
                catch (e) {
                    console.error(e);
                    res.status(500);
                    res.send({ mensaje: 'Error', codigo: 500 });
                }
            }
            else {
                res.redirect('iniciarSesion');
            }
        });
    }
};
__decorate([
    common_1.Get('/registro'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "registro", null);
__decorate([
    common_1.Post('registro'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "registrarPost", null);
__decorate([
    common_1.Get('/iniciarSesion'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "iniciarSesion", null);
__decorate([
    common_1.Post('/iniciarSesion'),
    __param(0, common_1.Body()),
    __param(1, common_1.Session()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "iniciarSesionPost", null);
__decorate([
    common_1.Get('logout'),
    __param(0, common_1.Res()),
    __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "logout", null);
__decorate([
    common_1.Get('/bienvenida'),
    __param(0, common_1.Session()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "bienvenida", null);
__decorate([
    common_1.Get('/crearCurso'),
    __param(0, common_1.Session()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "crearCurso", null);
__decorate([
    common_1.Post('crearCurso'),
    __param(0, common_1.Body()),
    __param(1, common_1.Session()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "crearCursoPost", null);
__decorate([
    common_1.Get('/buscarCursos'),
    __param(0, common_1.Session()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "buscarCursos", null);
__decorate([
    common_1.Get('/verCurso/:idCurso'),
    __param(0, common_1.Session()),
    __param(1, common_1.Param()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "verCurso", null);
__decorate([
    common_1.Get('/misCursos'),
    __param(0, common_1.Session()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "misCursos", null);
__decorate([
    common_1.Get('/administrarCurso'),
    __param(0, common_1.Session()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "administrarCurso", null);
__decorate([
    common_1.Get('/cursosDisponibles'),
    __param(0, common_1.Session()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "cursosDisponibles", null);
__decorate([
    common_1.Get('/verCursoEst/:idCurso'),
    __param(0, common_1.Session()),
    __param(1, common_1.Param()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "verCursoEst", null);
__decorate([
    common_1.Post('/verCursoEstudiante'),
    __param(0, common_1.Session()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "verCursoEstPost", null);
AppController = __decorate([
    common_1.Controller('/proyecto'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
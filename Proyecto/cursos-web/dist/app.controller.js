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
const class_validator_1 = require("class-validator");
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
                    res.redirect('/registro');
                }
                else {
                    const respuestaCrear = yield this.appService.crear(usuario);
                    console.log('Respues: ', respuestaCrear);
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
    bienvenida(res) {
        res.render('bienvenida');
    }
    cursosDisponibles(res) {
        res.render('cursosDisponibles');
    }
    buscarCursos(res) {
        res.render('buscarCursos');
    }
    verCurso(res) {
        res.render('verCurso');
    }
    misCursos(res) {
        res.render('misCursos');
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
    common_1.Get('/bienvenida'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "bienvenida", null);
__decorate([
    common_1.Get('/cursosDisponibles'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "cursosDisponibles", null);
__decorate([
    common_1.Get('/buscarCursos'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "buscarCursos", null);
__decorate([
    common_1.Get('/verCurso'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "verCurso", null);
__decorate([
    common_1.Get('/misCursos'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "misCursos", null);
AppController = __decorate([
    common_1.Controller('/proyecto'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./entity/usuario.entity");
const materia_entity_1 = require("./entity/materia.entity");
const curso_entity_1 = require("./entity/curso.entity");
const notas_entity_1 = require("./entity/notas.entity");
let AppService = class AppService {
    constructor(_usuarioRepository, _materiaRepository, _cursoRepository, _notasRepository) {
        this._usuarioRepository = _usuarioRepository;
        this._materiaRepository = _materiaRepository;
        this._cursoRepository = _cursoRepository;
        this._notasRepository = _notasRepository;
    }
    crear(nuevoUsuario) {
        const objetoEntidad = this._usuarioRepository.create(nuevoUsuario);
        return this._usuarioRepository.save(objetoEntidad);
    }
    crearCurso(nuevoCurso) {
        const objetoEntidad = this._cursoRepository.create(nuevoCurso);
        return this._cursoRepository.save(objetoEntidad);
    }
    crearNotas(nuevaNota) {
        const objetoEntidad = this._notasRepository.create(nuevaNota);
        return this._notasRepository.save(objetoEntidad);
    }
    buscar(parametrosBusqueda) {
        return this._usuarioRepository.find(parametrosBusqueda);
    }
    buscarMateria(parametrosBusqueda) {
        return this._materiaRepository.find(parametrosBusqueda);
    }
    buscarCurso(parametrosBusqueda) {
        return this._cursoRepository.find(parametrosBusqueda);
    }
    buscarNotas(parametrosBusqueda) {
        return this._notasRepository.find(parametrosBusqueda);
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(usuario_entity_1.usuarioEntity)),
    __param(1, typeorm_1.InjectRepository(materia_entity_1.materiaEntity)),
    __param(2, typeorm_1.InjectRepository(curso_entity_1.cursoEntity)),
    __param(3, typeorm_1.InjectRepository(notas_entity_1.notasEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
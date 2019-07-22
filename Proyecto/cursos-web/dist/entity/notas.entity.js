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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const curso_entity_1 = require("./curso.entity");
const usuario_entity_1 = require("./usuario.entity");
let notasEntity = class notasEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], notasEntity.prototype, "idNotas", void 0);
__decorate([
    typeorm_1.Column({
        type: 'float',
        name: 'calificaciones',
    }),
    __metadata("design:type", Number)
], notasEntity.prototype, "calificaciones", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'observaciones',
    }),
    __metadata("design:type", String)
], notasEntity.prototype, "observaciones", void 0);
__decorate([
    typeorm_1.ManyToOne(type => curso_entity_1.cursoEntity, curso => curso.notas),
    __metadata("design:type", curso_entity_1.cursoEntity)
], notasEntity.prototype, "cursoId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.usuarioEntity, usuario => usuario.notas),
    __metadata("design:type", usuario_entity_1.usuarioEntity)
], notasEntity.prototype, "usuarioId", void 0);
notasEntity = __decorate([
    typeorm_1.Entity('notas')
], notasEntity);
exports.notasEntity = notasEntity;
//# sourceMappingURL=notas.entity.js.map
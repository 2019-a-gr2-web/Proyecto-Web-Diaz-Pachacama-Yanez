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
const rol_entity_1 = require("./rol.entity");
const curso_entity_1 = require("./curso.entity");
const notas_entity_1 = require("./notas.entity");
let usuarioEntity = class usuarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], usuarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'nombre',
    }),
    __metadata("design:type", String)
], usuarioEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        name: 'direccion',
    }),
    __metadata("design:type", String)
], usuarioEntity.prototype, "direccion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 10,
        name: 'telefono',
    }),
    __metadata("design:type", String)
], usuarioEntity.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'email',
    }),
    __metadata("design:type", String)
], usuarioEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        name: 'password',
    }),
    __metadata("design:type", String)
], usuarioEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.ManyToOne(type => rol_entity_1.rolEntity, rol => rol.usuarios),
    __metadata("design:type", rol_entity_1.rolEntity)
], usuarioEntity.prototype, "rolId", void 0);
__decorate([
    typeorm_1.OneToMany(type => curso_entity_1.cursoEntity, curso => curso.usuarioId),
    __metadata("design:type", Array)
], usuarioEntity.prototype, "cursos", void 0);
__decorate([
    typeorm_1.OneToMany(type => notas_entity_1.notasEntity, notas => notas.usuarioId),
    __metadata("design:type", Array)
], usuarioEntity.prototype, "notas", void 0);
usuarioEntity = __decorate([
    typeorm_1.Entity('usuario')
], usuarioEntity);
exports.usuarioEntity = usuarioEntity;
//# sourceMappingURL=usuario.entity.js.map
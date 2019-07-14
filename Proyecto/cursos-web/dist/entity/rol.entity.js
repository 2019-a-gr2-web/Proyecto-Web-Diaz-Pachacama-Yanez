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
const usuario_entity_1 = require("./usuario.entity");
let rolEntity = class rolEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], rolEntity.prototype, "idRol", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        name: 'tipo_rol',
    }),
    __metadata("design:type", String)
], rolEntity.prototype, "tipoRol", void 0);
__decorate([
    typeorm_1.OneToMany(type => usuario_entity_1.usuarioEntity, usuario => usuario.rolId),
    __metadata("design:type", Array)
], rolEntity.prototype, "usuarios", void 0);
rolEntity = __decorate([
    typeorm_1.Entity('rol')
], rolEntity);
exports.rolEntity = rolEntity;
//# sourceMappingURL=rol.entity.js.map
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
const notas_entity_1 = require("./notas.entity");
let estudianteEntity = class estudianteEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], estudianteEntity.prototype, "idEstudiante", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_estudiante',
    }),
    __metadata("design:type", String)
], estudianteEntity.prototype, "nombreEstudiante", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        name: 'direccion_estudiante',
    }),
    __metadata("design:type", String)
], estudianteEntity.prototype, "direccionEstudiante", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 10,
        name: 'telefono_estudiante',
    }),
    __metadata("design:type", String)
], estudianteEntity.prototype, "telefonoEstudiante", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'email_estudiante',
    }),
    __metadata("design:type", String)
], estudianteEntity.prototype, "emailEstudiante", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.usuarioEntity, usuario => usuario.profesores),
    __metadata("design:type", usuario_entity_1.usuarioEntity)
], estudianteEntity.prototype, "usuarioId", void 0);
__decorate([
    typeorm_1.OneToMany(type => notas_entity_1.notasEntity, notas => notas.estudianteId),
    __metadata("design:type", Array)
], estudianteEntity.prototype, "notas", void 0);
estudianteEntity = __decorate([
    typeorm_1.Entity('estudiante')
], estudianteEntity);
exports.estudianteEntity = estudianteEntity;
//# sourceMappingURL=estudiante.entity.js.map
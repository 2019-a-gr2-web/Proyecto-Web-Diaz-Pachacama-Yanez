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
const curso_entity_1 = require("./curso.entity");
let profesorEntity = class profesorEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], profesorEntity.prototype, "idProfesor", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_profesor',
    }),
    __metadata("design:type", String)
], profesorEntity.prototype, "nombreProfesor", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        name: 'direccion_profesor',
    }),
    __metadata("design:type", String)
], profesorEntity.prototype, "direccionProfesor", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 10,
        name: 'telefono_profesor',
    }),
    __metadata("design:type", String)
], profesorEntity.prototype, "telefonoProfesor", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'email_profesor',
    }),
    __metadata("design:type", String)
], profesorEntity.prototype, "emailProfesor", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.usuarioEntity, usuario => usuario.profesores),
    __metadata("design:type", usuario_entity_1.usuarioEntity)
], profesorEntity.prototype, "usuarioId", void 0);
__decorate([
    typeorm_1.OneToMany(type => curso_entity_1.cursoEntity, curso => curso.profesorId),
    __metadata("design:type", Array)
], profesorEntity.prototype, "cursos", void 0);
profesorEntity = __decorate([
    typeorm_1.Entity('profesor')
], profesorEntity);
exports.profesorEntity = profesorEntity;
//# sourceMappingURL=profesor.entity.js.map
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
let materiaEntity = class materiaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], materiaEntity.prototype, "idMateria", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_materia',
    }),
    __metadata("design:type", String)
], materiaEntity.prototype, "nombreMateria", void 0);
__decorate([
    typeorm_1.OneToMany(type => curso_entity_1.cursoEntity, curso => curso.materiaId),
    __metadata("design:type", Array)
], materiaEntity.prototype, "cursos", void 0);
materiaEntity = __decorate([
    typeorm_1.Entity('materia')
], materiaEntity);
exports.materiaEntity = materiaEntity;
//# sourceMappingURL=materia.entity.js.map
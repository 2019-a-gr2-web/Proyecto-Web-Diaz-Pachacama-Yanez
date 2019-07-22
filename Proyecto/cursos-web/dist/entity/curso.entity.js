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
const materia_entity_1 = require("./materia.entity");
const notas_entity_1 = require("./notas.entity");
const usuario_entity_1 = require("./usuario.entity");
let cursoEntity = class cursoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], cursoEntity.prototype, "idCurso", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_curso',
    }),
    __metadata("design:type", String)
], cursoEntity.prototype, "nombreCurso", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        default: '2019-06-19',
        name: 'fecha_inicio',
    }),
    __metadata("design:type", Date)
], cursoEntity.prototype, "fechaInicio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        default: '2019-06-19',
        name: 'fecha_fin',
    }),
    __metadata("design:type", Date)
], cursoEntity.prototype, "fechaFin", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.usuarioEntity, usuario => usuario.cursos),
    __metadata("design:type", usuario_entity_1.usuarioEntity)
], cursoEntity.prototype, "usuarioId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => materia_entity_1.materiaEntity, materia => materia.cursos),
    __metadata("design:type", materia_entity_1.materiaEntity)
], cursoEntity.prototype, "materiaId", void 0);
__decorate([
    typeorm_1.OneToMany(type => notas_entity_1.notasEntity, nota => nota.cursoId),
    __metadata("design:type", Array)
], cursoEntity.prototype, "notas", void 0);
cursoEntity = __decorate([
    typeorm_1.Entity('curso')
], cursoEntity);
exports.cursoEntity = cursoEntity;
//# sourceMappingURL=curso.entity.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const materia_entity_1 = require("./entity/materia.entity");
const notas_entity_1 = require("./entity/notas.entity");
const usuario_entity_1 = require("./entity/usuario.entity");
const rol_entity_1 = require("./entity/rol.entity");
const curso_entity_1 = require("./entity/curso.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'proyecto',
                entities: [materia_entity_1.materiaEntity, notas_entity_1.notasEntity, usuario_entity_1.usuarioEntity, rol_entity_1.rolEntity, curso_entity_1.cursoEntity],
                synchronize: true,
                dropSchema: false
            }), typeorm_1.TypeOrmModule.forFeature([
                materia_entity_1.materiaEntity, notas_entity_1.notasEntity, usuario_entity_1.usuarioEntity, rol_entity_1.rolEntity, curso_entity_1.cursoEntity
            ], 'default')],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
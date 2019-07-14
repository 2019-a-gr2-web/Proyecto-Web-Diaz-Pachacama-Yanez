import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {rolEntity} from "./rol.entity";
import {profesorEntity} from "./profesor.entity";
import {estudianteEntity} from "./estudiante.entity";

@Entity('usuario') // Nombre tabla
export class usuarioEntity {

    @PrimaryGeneratedColumn()
    idUsuario:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'user',
    })
    user: string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'password',
    })
    password: string;

    @ManyToOne(type => rolEntity, rol => rol.usuarios)
    rolId: rolEntity;

    @OneToMany(type => profesorEntity, profesor => profesor.usuarioId)
    profesores: profesorEntity[];

    @OneToMany(type => estudianteEntity, estudiante => estudiante.usuarioId)
    estudiantes: profesorEntity[];
}
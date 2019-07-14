import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {rolEntity} from "./rol.entity";
import {cursoEntity} from "./curso.entity";
import {estudianteEntity} from "./estudiante.entity";

@Entity('notas') // Nombre tabla
export class notasEntity {

    @PrimaryGeneratedColumn()
    idNotas:number;

    @Column({
        type: 'float',
        name: 'calificaciones',
    })
    calificaciones: number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'observaciones',
    })
    observaciones: string;

    @ManyToOne(type => cursoEntity, curso => curso.notas)
    cursoId: cursoEntity;

    @ManyToOne(type => estudianteEntity, estudiante => estudiante.notas)
    estudianteId: estudianteEntity;
}
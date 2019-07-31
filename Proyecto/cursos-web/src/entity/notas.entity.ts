import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {cursoEntity} from "./curso.entity";
import {usuarioEntity} from "./usuario.entity";

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
        default: 'Ninguna'
    })
    observaciones: string;

    @ManyToOne(type => cursoEntity, curso => curso.notas)
    cursoId: cursoEntity;

    @ManyToOne(type => usuarioEntity, usuario => usuario.notas)
    usuarioId: usuarioEntity;
}
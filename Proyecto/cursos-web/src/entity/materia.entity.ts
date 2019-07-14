import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {cursoEntity} from "./curso.entity";

@Entity('materia') // Nombre tabla
export class materiaEntity {

    @PrimaryGeneratedColumn()
    idMateria:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_materia',
    })
    nombreMateria: string;

    @OneToMany(type => cursoEntity, curso => curso.materiaId)
    cursos: cursoEntity[];
}
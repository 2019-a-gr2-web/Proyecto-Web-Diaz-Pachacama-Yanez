import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {usuarioEntity} from "./usuario.entity";
import {rolEntity} from "./rol.entity";
import {cursoEntity} from "./curso.entity";

@Entity('profesor') // Nombre tabla
export class profesorEntity {

    @PrimaryGeneratedColumn()
    idProfesor:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_profesor',
    })
    nombreProfesor: string;

    @Column({
        type: 'varchar',
        length: 50,
        name: 'direccion_profesor',
    })
    direccionProfesor: string;

    @Column({
        type: 'varchar',
        length: 10,
        name: 'telefono_profesor',
    })
    telefonoProfesor: string;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'email_profesor',
    })
    emailProfesor: string;

    @ManyToOne(type => usuarioEntity, usuario => usuario.profesores)
    usuarioId: usuarioEntity;

    @OneToMany(type => cursoEntity, curso => curso.profesorId)
    cursos: cursoEntity[];

}
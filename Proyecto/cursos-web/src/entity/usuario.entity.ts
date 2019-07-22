import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {rolEntity} from "./rol.entity";
import {cursoEntity} from "./curso.entity";
import {notasEntity} from "./notas.entity";

@Entity('usuario') // Nombre tabla
export class usuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'nombre',
    })
    nombre: string;

    @Column({
        type: 'varchar',
        length: 50,
        name: 'direccion',
    })
    direccion: string;

    @Column({
        type: 'varchar',
        length: 10,
        name: 'telefono',
    })
    telefono: string;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'email',
    })
    email: string;

    /*@Column({
        type: 'varchar',
        length: 100,
        name: 'user',
    })
    user: string;*/

    @Column({
        type: 'varchar',
        length: 20,
        name: 'password',
    })
    password: string;

    @ManyToOne(type => rolEntity, rol => rol.usuarios)
    rolId: rolEntity;

    /*@OneToMany(type => profesorEntity, profesor => profesor.usuarioId)
    profesores: profesorEntity[];

    @OneToMany(type => estudianteEntity, estudiante => estudiante.usuarioId)
    estudiantes: profesorEntity[];*/

    @OneToMany(type => cursoEntity, curso => curso.usuarioId)
    cursos: cursoEntity[];

    @OneToMany(type => notasEntity, notas => notas.usuarioId)
    notas: notasEntity[];
}
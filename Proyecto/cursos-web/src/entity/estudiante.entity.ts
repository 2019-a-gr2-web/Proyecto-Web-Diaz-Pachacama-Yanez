import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {usuarioEntity} from "./usuario.entity";
import {cursoEntity} from "./curso.entity";
import {notasEntity} from "./notas.entity";

@Entity('estudiante') // Nombre tabla
export class estudianteEntity {

    @PrimaryGeneratedColumn()
    idEstudiante:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_estudiante',
    })
    nombreEstudiante: string;

    @Column({
        type: 'varchar',
        length: 50,
        name: 'direccion_estudiante',
    })
    direccionEstudiante: string;

    @Column({
        type: 'varchar',
        length: 10,
        name: 'telefono_estudiante',
    })
    telefonoEstudiante: string;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'email_estudiante',
    })
    emailEstudiante: string;

    @ManyToOne(type => usuarioEntity, usuario => usuario.profesores)
    usuarioId: usuarioEntity;

    @OneToMany(type => notasEntity, notas => notas.estudianteId)
    notas: notasEntity[];
}
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {profesorEntity} from "./profesor.entity";
import {materiaEntity} from "./materia.entity";
import {notasEntity} from "./notas.entity";

@Entity('curso') // Nombre tabla
export class cursoEntity {

    @PrimaryGeneratedColumn()
    idCurso:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_curso',
    })
    nombreCurso: string;

    @Column({
        type: 'date',
        default: '2019-06-19',
        name: 'fecha_inicio',
    })
    fechaInicio: Date;

    @Column({
        type: 'date',
        default: '2019-06-19',
        name: 'fecha_fin',
    })
    fechaFin: Date;

    @ManyToOne(type => profesorEntity, profesor => profesor.cursos)
    profesorId: profesorEntity;

    @ManyToOne(type => materiaEntity, materia => materia.cursos)
    materiaId: materiaEntity;

    @OneToMany(type => notasEntity, nota => nota.cursoId)
    notas: notasEntity[];
}
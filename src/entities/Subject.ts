import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm";
import Teacher from "./Teachers";

@Entity("subjects")
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Teacher, (teacher) => teacher.id)
    @JoinTable({
        name: "teachers_subjects",
        joinColumn: {
            name: "subject_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "teacher_id",
            referencedColumnName: "id",
        },
    })
    teachers: Teacher[];
}

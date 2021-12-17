import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm";
import Subject from "./Subject";

@Entity("teachers")
export default class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Subject, (subject) => subject.id)
    @JoinTable({
        name: "teachers_subjects",
        joinColumn: {
            name: "teacher_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "subject_id",
            referencedColumnName: "id",
        },
    })
    subjects: Subject[];
}

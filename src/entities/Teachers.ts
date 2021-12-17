import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm";
import Subject from "./Subject";
import Exam from "./Exams";

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

    @ManyToMany(() => Exam, (exam) => exam.teacherSubjectId, { eager: true })
    @JoinTable({
        name: "teachers_subjects",
        joinColumn: {
            name: "teacher_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "id",
            referencedColumnName: "teacherSubjectId",
        },
    })
    exams: Exam[];
}

import {
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
    JoinTable,
} from "typeorm";
import Exam from "./Exams";
import Teacher from "./Teachers";
import Subject from "./Subject";

@Entity("teachers_subjects")
export default class TeacherSubject {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teacher, (teacher) => teacher.id)
    @JoinColumn({ name: "teacher_id" })
    teacher: Teacher;

    // @OneToMany(() => Exam, (exam) => exam.teacherSubject, { eager: true })
    // @JoinColumn({ name: "teachers_subjects_id" })
    // exams: Exam[];

    // @ManyToOne(() => Subject, (Subject) => Subject.id)
    // subject: Subject;
}

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import TeacherSubject from "./TeacherSubject";
import Year from "./Years";

@Entity("exams")
export default class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @Column({ name: "type_id" })
    typeId: number;

    @Column({ name: "semester_id" })
    semesterId: number;

    @Column({ name: "year_id" })
    yearId: number;

    @Column({ name: "teachers_subjects_id" })
    teacherSubjectId: number;

    @OneToOne(() => Year, { eager: true })
    @JoinColumn({ name: "year_id" })
    year: Year;

    // @ManyToOne(() => TeacherSubject, (teacherSubject) => teacherSubject.exams)
    // teacherSubject: TeacherSubject;
}

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";

import Year from "./Years";
import Semester from "./Semesters";
import Type from "./Types";

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

    @OneToOne(() => Semester, { eager: true })
    @JoinColumn({ name: "semester_id" })
    semester: Semester;

    @OneToOne(() => Type, { eager: true })
    @JoinColumn({ name: "type_id" })
    type: Type;

    getExam() {
        return {
            name: this.name,
            link: this.link,
            type: this.type.name,
            semester: this.semester.semester,
            year: this.year.year,
        };
    }
}

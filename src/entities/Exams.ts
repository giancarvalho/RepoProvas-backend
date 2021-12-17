import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
} from "typeorm";

import Year from "./Years";
import Type from "./Types";
import Subject from "./Subject";
import Teacher from "./Teachers";

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

    @Column({ name: "year_id" })
    yearId: number;

    @Column({ name: "teachers_subjects_id" })
    teacherSubjectId: number;

    @OneToOne(() => Year, { eager: true })
    @JoinColumn({ name: "year_id" })
    year: Year;

    @OneToOne(() => Type, { eager: true })
    @JoinColumn({ name: "type_id" })
    type: Type;

    @ManyToMany(() => Subject, (subject) => subject.id)
    @JoinTable({
        name: "teachers_subjects",
        joinColumn: {
            name: "id",
            referencedColumnName: "teacherSubjectId",
        },
        inverseJoinColumn: {
            name: "subject_id",
            referencedColumnName: "id",
        },
    })
    subject: Subject[];

    @ManyToMany(() => Teacher, (teacher) => teacher.id)
    @JoinTable({
        name: "teachers_subjects",
        joinColumn: {
            name: "id",
            referencedColumnName: "teacherSubjectId",
        },
        inverseJoinColumn: {
            name: "teacher_id",
            referencedColumnName: "id",
        },
    })
    teacher: Teacher[];

    getExamWithSubject() {
        return {
            name: this.name,
            link: this.link,
            type: this.type.name,
            year: this.year.year,
            subject: this.subject[0].name,
        };
    }

    getExamWithTeacher() {
        return {
            name: this.name,
            link: this.link,
            type: this.type.name,
            year: this.year.year,
            teacher: this.teacher[0].name,
        };
    }
}

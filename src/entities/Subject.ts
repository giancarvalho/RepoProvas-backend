import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    OneToOne,
    JoinColumn,
} from "typeorm";
import Teacher from "./Teachers";
import Semester from "./Semesters";

@Entity("subjects")
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: "semester_id" })
    semesterId: number;

    @OneToOne(() => Semester, { eager: true })
    @JoinColumn({ name: "semester_id" })
    semester: Semester;

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

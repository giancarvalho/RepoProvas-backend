import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("teachers_subjects")
export default class TeacherSubject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "teacher_id" })
    teacherId: number;

    @Column({ name: "subject_id" })
    subjectId: number;

    // @ManyToOne(() => Teacher, (teacher) => teacher.id)
    // @JoinColumn({ name: "teacher_id" })
    // teacher: Teacher;
}

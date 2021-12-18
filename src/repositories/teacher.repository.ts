import { getRepository } from "typeorm";
import Subject from "../entities/Subject";
import Teacher from "../entities/Teachers";
import TeacherSubject from "../entities/TeacherSubject";

async function getBySubject(subjectId: number) {
    const result = await getRepository(Subject).find({
        where: [{ id: subjectId }],
        relations: ["teachers"],
    });

    return result;
}

async function getAll() {
    const result = await getRepository(Teacher).find({
        relations: ["exams"],
    });

    return result;
}

async function getOneWithExams(teacherId: number) {
    const result = await getRepository(Teacher).find({
        where: [{ id: teacherId }],
        relations: ["exams", "exams.subject"],
    });

    return result;
}

export { getBySubject, getAll, getOneWithExams };

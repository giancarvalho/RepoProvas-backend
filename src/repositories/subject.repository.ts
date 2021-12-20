import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

async function getAll() {
    const result = await getRepository(Subject).find({
        relations: ["exams", "exams.teacher"],
    });

    return result;
}

async function getAllWithTeachers() {
    const result = await getRepository(Subject).find({
        relations: ["teachers"],
    });

    return result;
}

async function findOne(subjectId: number) {
    const result = await getRepository(Subject).findOne({
        where: { id: subjectId },
        relations: ["exams", "exams.teacher"],
    });

    return result;
}

export { getAll, findOne, getAllWithTeachers };

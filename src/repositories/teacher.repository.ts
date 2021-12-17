import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

async function getBySubject(subjectId: number) {
    const teachers = await getRepository(Subject).find({
        where: [{ id: subjectId }],
        relations: ["teachers"],
    });

    return teachers;
}

export { getBySubject };

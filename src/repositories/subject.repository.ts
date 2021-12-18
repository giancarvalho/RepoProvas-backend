import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

async function getAll() {
    const result = await getRepository(Subject).find({
        relations: ["exams", "exams.teacher"],
    });

    return result;
}

export { getAll };

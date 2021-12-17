import { getRepository } from "typeorm";
import Exam from "../entities/Exams";
import { iExam } from "../protocols/exams.interface";

async function insert(examData: iExam) {
    const result = await getRepository(Exam).insert(examData);

    return result.raw;
}

async function find(examName: string, examLink: string) {
    const result = await getRepository(Exam).find({
        where: [{ name: examName }, { link: examLink }],
    });

    return result;
}

export { insert, find };

import examSchema from "../schemas/exam.schema";
import { BadRequest, Conflict } from "../utils/Errors";
import { iExam } from "../protocols/exams.interface";
import * as examRepository from "../repositories/exam.repository";

async function create(examData: iExam) {
    const { error } = examSchema.validate(examData);

    if (error) throw new BadRequest("Exam data is invalid");

    const searchExistingExams = await examRepository.find(
        examData.name,
        examData.link
    );

    if (searchExistingExams.length > 0) {
        throw new Conflict("Exam is already registered");
    }

    return examRepository.insert(examData);
}

export { create };
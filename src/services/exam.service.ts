import examSchema from "../schemas/exam.schema";
import { BadRequest, Conflict } from "../utils/Errors";
import { iExam, iExamDB } from "../protocols/exams.interface";
import * as examRepository from "../repositories/exam.repository";
import * as teacherRepository from "../repositories/teacher.repository";
import { getRepository } from "typeorm";
import TeacherSubject from "../entities/TeacherSubject";

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

    const teacherSubjectSearch = await getRepository(TeacherSubject).findOne({
        where: [
            { teacherId: examData.teacherId },
            { subjectId: examData.subjectId },
        ],
    });

    const examDataDB = {
        name: examData.name,
        link: examData.link,
        typeId: examData.typeId,
        yearId: examData.yearId,
        teacherSubjectId: teacherSubjectSearch.id,
    } as iExamDB;

    return examRepository.insert(examDataDB);
}

export { create };

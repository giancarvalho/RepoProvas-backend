import examSchema from "../schemas/exam.schema";
import { BadRequest, Conflict } from "../utils/Errors";
import { iExam } from "../protocols/exams.interface";
import * as examRepository from "../repositories/exam.repository";
import * as teacherRepository from "../repositories/teacher.repository";

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

async function getByTeacher(teacherId: number) {
    const findTeacherRequest = await teacherRepository.getOneWithExams(
        teacherId
    );

    const teacher = findTeacherRequest[0];
    return {
        name: teacher.name,
        exams: teacher.exams.map((exam) => exam.getExamWithSubject()),
    };
}

export { create, getByTeacher };

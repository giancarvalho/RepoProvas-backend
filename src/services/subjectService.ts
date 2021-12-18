import * as subjectRepository from "../repositories/subject.repository";

async function getAll() {
    const subjects = await subjectRepository.getAll();

    return subjects.map((subject) => subject.getSubjectWithExamAmount());
}

async function getOne(subjectId: number) {
    const subjectFound = await subjectRepository.findOne(subjectId);

    return {
        name: subjectFound.name,
        exams: subjectFound.exams.map((exam) => exam.getExamWithTeacher()),
    };
}

export { getAll, getOne };

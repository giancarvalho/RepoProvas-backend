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

async function getAllWithTeachers() {
    const subjects = await subjectRepository.getAllWithTeachers();

    return subjects.map((subject) => {
        return {
            id: subject.id,
            name: subject.name,
            teachers: subject.teachers,
        };
    });
}

export { getAll, getOne, getAllWithTeachers };

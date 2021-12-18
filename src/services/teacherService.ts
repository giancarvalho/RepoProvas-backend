import * as teacherRepository from "../repositories/teacher.repository";

async function getBySubject(subjectId: number) {
    const teachers = await teacherRepository.getBySubject(subjectId);

    return teachers[0];
}

async function getAll() {
    const teachers = await teacherRepository.getAll();

    return teachers.map((teacher) => {
        return {
            id: teacher.id,
            name: teacher.name,
            examsRegistered: teacher.exams.length,
        };
    });
}

export { getBySubject, getAll };

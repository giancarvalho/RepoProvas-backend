import * as teacherRepository from "../repositories/teacher.repository";

async function getBySubject(subjectId: number) {
    const teachers = await teacherRepository.getBySubject(subjectId);

    return teachers;
}

export { getBySubject };

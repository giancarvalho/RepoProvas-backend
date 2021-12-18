import * as subjectRepository from "../repositories/subject.repository";

async function getAll() {
    const subjects = await subjectRepository.getAll();

    return subjects.map((subject) => subject.getSubjectWithExamAmount());
}

export { getAll };

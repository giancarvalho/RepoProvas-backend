import faker from "faker";
import { iExam, iExamDB } from "../../src/protocols/exams.interface";

function createFakeExam() {
    const newExam: iExam = {
        name: faker.lorem.words(),
        link: faker.internet.url(),
        typeId: 2,
        yearId: 2,
        teacherId: 1,
        subjectId: 1,
    };

    return newExam;
}

function createFakeDBExam() {
    const newExam: iExamDB = {
        name: faker.lorem.words(),
        link: faker.internet.url(),
        typeId: 2,
        yearId: 2,
        teacherSubjectId: 1,
    };

    return newExam;
}

export { createFakeExam, createFakeDBExam };

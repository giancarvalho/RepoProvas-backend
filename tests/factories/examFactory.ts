import faker from "faker";
import { iExam } from "../../src/protocols/exams.interface";

function createFakeExam() {
    const newExam: iExam = {
        name: faker.lorem.words(),
        link: faker.internet.url(),
        typeId: 2,
        semesterId: 2,
        yearId: 2,
        teacherId: 2,
        subjectId: 2,
    };

    return newExam;
}

export default createFakeExam;

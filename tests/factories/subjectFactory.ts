import * as subjectRepository from "../../src/repositories/subject.repository";
import faker from "faker";

async function getASubject() {
    const subjects = await subjectRepository.getAll();

    const subject = faker.random.arrayElement(subjects);

    return subject;
}

export default getASubject;

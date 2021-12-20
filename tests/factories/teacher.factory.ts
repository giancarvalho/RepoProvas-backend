import * as teacherRepository from "../../src/repositories/teacher.repository";
import faker from "faker";

async function getATeacher() {
    const teachers = await teacherRepository.getAll();

    const teacher = faker.random.arrayElement(teachers);

    return teacher;
}

export default getATeacher;

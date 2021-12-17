import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";
import faker from "faker";

import app, { init } from "../../src/app";
import Subject from "../../src/entities/Subject";
import { iSubjectTeachersDB } from "../../src/protocols/subjects.interface";

afterAll(async () => {
    await getConnection().close();
});

describe("GET /users", () => {
    let subjects: iSubjectTeachersDB[];

    beforeAll(async () => {
        await init();

        subjects = await getRepository(Subject).find();
    });

    it("should return an object with an array of teachers", async () => {
        const subject = faker.random.arrayElement(subjects);

        const response = await supertest(app).get(`/teachers/${subject.id}`);

        expect(response.body).toHaveProperty("teachers");
    });
});

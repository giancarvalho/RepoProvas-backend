import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";
import faker from "faker";

import app, { init } from "../../src/app";
import Subject from "../../src/entities/Subject";
import { iSubjectTeachersDB } from "../../src/protocols/subjects.interface";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /teachers/:subjectId", () => {
    let subjects: iSubjectTeachersDB[];

    beforeAll(async () => {
        subjects = await getRepository(Subject).find();
    });

    it("should return an object with an array of teachers", async () => {
        const subject = faker.random.arrayElement(subjects);

        const response = await supertest(app).get(`/teachers/${subject.id}`);

        expect(response.body).toHaveProperty("teachers");
    });
});

describe("GET /teachers", () => {
    let subjects: iSubjectTeachersDB[];

    beforeAll(async () => {
        subjects = await getRepository(Subject).find();
    });

    it("should get and array of teachers containing name and examsRegistered", async () => {
        const response = await supertest(app).get(`/teachers`);

        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty("name");
        expect(response.body[0]).toHaveProperty("examsRegistered");
    });
});

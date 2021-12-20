import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";
import faker from "faker";

import app, { init } from "../../src/app";
import Subject from "../../src/entities/Subject";
import { iSubjectTeachersDB } from "../../src/protocols/subjects.interface";
import getATeacher from "../factories/teacher.factory";

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
    it("should get and array of teachers containing name and examsRegistered", async () => {
        const response = await supertest(app).get(`/teachers`);

        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty(["name"]);
        expect(response.body[0]).toHaveProperty("examsRegistered");
    });
});

describe("GET teacher/:teacherId", () => {
    it("should return an object with the teachers name and array of exams", async () => {
        const teacher = await getATeacher();

        const response = await supertest(app).get(
            `/teachers/${teacher.id}/exams`
        );

        expect(response.body).toHaveProperty("name");
        expect(response.body).toHaveProperty("exams");
    });

    it("should return status 400 if a number is not send as a parameter", async () => {
        const response = await supertest(app).get(`/teachers/:teacherId/exams`);

        expect(response.status).toBe(400);
    });
});

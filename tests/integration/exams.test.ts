import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createFakeExam, createFakeDBExam } from "../factories/exam.factory";

import { clearDatabase } from "../utils/database";
import * as examRepository from "../../src/repositories/exam.repository";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe("POST /exams", () => {
    const conflictingExam = createFakeDBExam();

    beforeAll(async () => {
        await examRepository.insert({ ...conflictingExam });
    });

    it("should answer with status 201 if examData is valid", async () => {
        const newExam = createFakeExam();

        const response = await supertest(app).post("/exams").send(newExam);

        expect(response.status).toBe(201);
    });

    it("should answer with status 400 if examData is invalid", async () => {
        const newExam = createFakeExam();

        delete newExam.name;

        const response = await supertest(app).post("/exams").send(newExam);

        expect(response.status).toBe(400);
    });

    it("should answer with status 409 if exam is already registered", async () => {
        const fakeExam = createFakeExam();
        fakeExam.name = conflictingExam.name;
        fakeExam.link = conflictingExam.link;

        const response = await supertest(app).post("/exams").send(fakeExam);

        expect(response.status).toBe(409);
    });
});

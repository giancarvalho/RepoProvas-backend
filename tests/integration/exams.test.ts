import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import createFakeExam from "../factories/examFactory";

import { clearDatabase } from "../utils/database";
import * as examRepository from "../../src/repositories/exam.repository";

afterAll(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /users", () => {
    const conflictingExam = createFakeExam();

    beforeAll(async () => {
        await init();

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
        const response = await supertest(app)
            .post("/exams")
            .send(conflictingExam);

        expect(response.status).toBe(409);
    });
});

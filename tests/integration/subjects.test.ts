import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";

import app, { init } from "../../src/app";

import getASubject from "../factories/subject.factory";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /subjects/:subjectId/exams", () => {
    it("should return an object with an array of exams", async () => {
        const subject = await getASubject();

        const response = await supertest(app).get(
            `/subjects/${subject.id}/exams`
        );

        expect(response.body).toHaveProperty("name");
        expect(response.body).toHaveProperty("exams");
    });
});

describe("GET /subjects", () => {
    it("should get and array of subjects containing name and examsRegistered", async () => {
        const response = await supertest(app).get(`/subjects`);

        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty(["name"]);
        expect(response.body[0]).toHaveProperty("examsRegistered");
    });
});

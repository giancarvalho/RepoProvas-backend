import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";

import app, { init } from "../../src/app";
import getASubject from "../factories/subjectFactory";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /form", () => {
    it("should return an object with an with propeties subjects, years and types", async () => {
        const response = await supertest(app).get(`/form`);

        const formResponse = response.body;

        expect(formResponse).toHaveProperty("subjects");
        expect(formResponse).toHaveProperty("years");
        expect(formResponse).toHaveProperty("types");
        expect(formResponse.types.length).toBeGreaterThan(0);
        expect(formResponse.subjects.length).toBeGreaterThan(0);
        expect(formResponse.years.length).toBeGreaterThan(0);
    });
});

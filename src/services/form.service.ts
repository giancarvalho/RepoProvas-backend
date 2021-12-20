import { getRepository } from "typeorm";
import * as subjectService from "./subject.service";
import Year from "../entities/Years";
import Type from "../entities/Types";

async function getInfo() {
    const subjects = await subjectService.getAllWithTeachers();
    const years = await getRepository(Year).find();
    const types = await getRepository(Type).find();

    return { subjects, years, types };
}

export { getInfo };

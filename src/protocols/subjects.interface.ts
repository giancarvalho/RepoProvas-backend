import { iTeacherDB } from "./teachers.interface";

interface iSubjectDB {
    id: number;
    name: string;
}

interface iSubjectTeachersDB extends iSubjectDB {
    id: number;
    name: string;
    teachers: iTeacherDB[];
}

export { iSubjectDB, iSubjectTeachersDB };

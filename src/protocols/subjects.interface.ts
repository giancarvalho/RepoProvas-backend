import { iTeacherDB } from "./teachers.interface";

interface iSubjectDB {
    id: number;
    name: string;
    semesterId: number;
}

interface iSubjectTeachersDB extends iSubjectDB {
    teachers: iTeacherDB[];
}

export { iSubjectDB, iSubjectTeachersDB };

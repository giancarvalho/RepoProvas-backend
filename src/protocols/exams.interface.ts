interface iExam {
    name: string;
    link: string;
    typeId: number;
    yearId: number;
    subjectId: number;
    teacherId: number;
}

interface iExamDB {
    name: string;
    link: string;
    typeId: number;
    yearId: number;
    teacherSubjectId: number;
}

export { iExam, iExamDB };

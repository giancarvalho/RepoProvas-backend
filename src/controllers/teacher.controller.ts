import { NextFunction, Request, Response } from "express";
import * as teacherService from "../services/teacherService";

async function getTeachersBySubject(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { subject } = req.params;

    try {
        const getTeachersRequest = await teacherService.getBySubject(
            Number(subject)
        );

        res.send(getTeachersRequest);
    } catch (err) {
        next(err);
    }
}

async function getTeachers(req: Request, res: Response, next: NextFunction) {
    try {
        const getTeachersRequest = await teacherService.getAll();

        return res.send(getTeachersRequest);
    } catch (error) {
        next(error);
    }
}

async function getTeacherExams(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { teacherId } = req.params;

    try {
        const id = Number(teacherId);

        if (!id) {
            return res.sendStatus(400);
        }

        const getExamsRequest = await teacherService.getExams(id);

        res.send(getExamsRequest);
    } catch (error) {
        next(error);
    }
}

export { getTeachersBySubject, getTeachers, getTeacherExams };

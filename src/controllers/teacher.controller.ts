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

export { getTeachersBySubject, getTeachers };

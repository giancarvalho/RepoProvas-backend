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

export { getTeachersBySubject };

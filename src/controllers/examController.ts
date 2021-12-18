import { NextFunction, Request, Response } from "express";

import * as examService from "../services/examService";

async function postExam(req: Request, res: Response, next: NextFunction) {
    const examData = req.body;

    try {
        await examService.create(examData);

        res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}

async function getExamByTeacher(
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

        const getExamsRequest = await examService.getByTeacher(id);

        res.send(getExamsRequest);
    } catch (error) {
        next(error);
    }
}

export { postExam, getExamByTeacher };

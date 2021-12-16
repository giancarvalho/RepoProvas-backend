import { NextFunction, Request, Response } from "express";

import * as examService from "../services/examService";

async function postExam(req: Request, res: Response, next: NextFunction) {
    const examData = req.body;

    try {
        if (!examData) res.sendStatus(400);

        await examService.create(examData);

        res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}

export { postExam };

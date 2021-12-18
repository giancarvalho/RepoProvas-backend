import { NextFunction, Request, Response } from "express";
import * as subjectService from "../services/subjectService";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const getSubjectsRequest = await subjectService.getAll();

        res.send(getSubjectsRequest);
    } catch (error) {
        next(error);
    }
}

export { getAll };

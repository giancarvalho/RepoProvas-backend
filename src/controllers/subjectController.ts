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

async function getOne(req: Request, res: Response, next: NextFunction) {
    const { subjectId } = req.params;
    try {
        const id = Number(subjectId);

        if (!id) {
            return res.sendStatus(400);
        }
        const getSubjectRequest = await subjectService.getOne(id);

        res.send(getSubjectRequest);
    } catch (error) {
        next(error);
    }
}

export { getAll, getOne };

import { NextFunction, Request, Response } from "express";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        return res.sendStatus(200);
    } catch (error) {
        next(error);
    }
}

export { getAll };

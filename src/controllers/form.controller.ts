import { NextFunction, Request, Response } from "express";
import * as formService from "../services/form.service";

async function getFormInfo(req: Request, res: Response, next: NextFunction) {
    try {
        const getInfoRequest = await formService.getInfo();

        res.send(getInfoRequest);
    } catch (error) {
        next(error);
    }
}

export { getFormInfo };

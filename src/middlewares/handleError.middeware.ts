import { GeneralError } from "../utils/Errors";
import { Request, Response, NextFunction } from "express";

const handleErrors = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof GeneralError) {
        return res.status(error.getCode()).send(error.message);
    }
    console.log(error instanceof GeneralError);
    res.sendStatus(500);
};

export default handleErrors;

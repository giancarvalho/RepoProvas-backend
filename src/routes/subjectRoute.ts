import express from "express";
import * as subjectController from "../controllers/subjectController";

const subjectRoute = express.Router();

subjectRoute.get("", subjectController.getAll);

subjectRoute.get("/:subjectId", subjectController.getOne);

export default subjectRoute;

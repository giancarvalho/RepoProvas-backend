import express from "express";
import * as subjectController from "../controllers/subject.controller";

const subjectRoute = express.Router();

subjectRoute.get("", subjectController.getAll);

subjectRoute.get("/:subjectId/exams", subjectController.getOne);

export default subjectRoute;

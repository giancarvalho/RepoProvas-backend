import express from "express";
import * as subjectController from "../controllers/subjectController";

const subjectRoute = express.Router();

subjectRoute.get("", subjectController.getAll);

export default subjectRoute;

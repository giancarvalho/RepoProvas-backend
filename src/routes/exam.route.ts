import express from "express";
import * as examController from "../controllers/exam.controller";

const examRoute = express.Router();

examRoute.post("", examController.postExam);

export default examRoute;

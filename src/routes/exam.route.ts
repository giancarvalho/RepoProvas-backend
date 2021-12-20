import express from "express";
import * as examController from "../controllers/exam.controller";

const examRoute = express.Router();

examRoute.post("", examController.postExam);

examRoute.get("/teacher/:teacherId", examController.getExamByTeacher);

export default examRoute;

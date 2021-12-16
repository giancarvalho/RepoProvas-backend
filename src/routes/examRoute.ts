import express from "express";
import * as examController from "../controllers/examController";

const examRoute = express.Router();

examRoute.post("", examController.postExam);

export default examRoute;

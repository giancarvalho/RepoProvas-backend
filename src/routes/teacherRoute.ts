import express from "express";
import * as teacherController from "../controllers/teacherController";

const teacherRoute = express.Router();

teacherRoute.get("/:subject", teacherController.getTeachersBySubject);
teacherRoute.get("", teacherController.getTeachers);

export default teacherRoute;

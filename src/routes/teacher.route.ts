import express from "express";
import * as teacherController from "../controllers/teacher.controller";

const teacherRoute = express.Router();

teacherRoute.get("/:subject", teacherController.getTeachersBySubject);
teacherRoute.get("", teacherController.getTeachers);
teacherRoute.get("/:teacherId/exams", teacherController.getTeacherExams);

export default teacherRoute;

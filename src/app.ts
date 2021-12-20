import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";
import handleErrors from "./middlewares/handleError.middeware";
import connectDatabase from "./database";
import examRoute from "./routes/examRoute";
import teacherRoute from "./routes/teacherRoute";
import subjectRoute from "./routes/subjectRoute";
import formRoute from "./routes/form.route";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/exams", examRoute);
app.use("/teachers", teacherRoute);
app.use("/subjects", subjectRoute);
app.use("/form", formRoute);

app.use(handleErrors);

export async function init() {
    await connectDatabase();
}

export default app;

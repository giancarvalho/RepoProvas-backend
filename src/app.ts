import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";
import handleErrors from "./middlewares/handleError.middeware";
import connectDatabase from "./database";
import examRoute from "./routes/examRoute";
import teacherRoute from "./routes/teacherRoute";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/exams", examRoute);
app.use("/teachers", teacherRoute);

app.use(handleErrors);

export async function init() {
    await connectDatabase();
}

export default app;

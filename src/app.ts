import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";
import handleErrors from "./middlewares/handleError.middeware";
import connectDatabase from "./database";
import examRoute from "./routes/examRoute";
import * as userController from "./controllers/userConroller";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/exams", examRoute);

app.get("/users", userController.getUsers);

app.get("/health", async (req, res) => {
    res.sendStatus(200);
});

app.use(handleErrors);

export async function init() {
    await connectDatabase();
}

export default app;

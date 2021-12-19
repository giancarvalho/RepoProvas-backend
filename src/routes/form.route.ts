import express from "express";
import * as formController from "../controllers/form.controller";

const formRoute = express.Router();

formRoute.get("", formController.getFormInfo);

export default formRoute;

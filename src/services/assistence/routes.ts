import { Router } from "express";
import { verifyToken } from "../../middlewares/verifyToken";
import { createAssistence } from "./controller/createAssistence";
import { updateAssitence } from "./controller/updateAssistence";
import { getAssitences } from "./controller/getAssitences";

const assistenceRouter = Router();

assistenceRouter
  .post("/new", verifyToken, createAssistence)
  .post("/update/:userid/:subjectid/:date", verifyToken, updateAssitence)
  .get("/get/:userid", verifyToken, getAssitences);

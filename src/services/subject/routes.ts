import { Router } from "express";
import {
  ListSubject,
  createSubject,
  deleteSubject,
  getSubject,
  updateSubject,
} from "./controller/subject.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const subjectRouter = Router();

subjectRouter
  .post("/subject", verifyToken, createSubject)
  .get("/subject/list",verifyToken, ListSubject)
  .get("/subject/:id", verifyToken, getSubject)
  .post("/subject/update/:id", verifyToken, updateSubject)
  .delete("/subject/delete/:id", verifyToken, deleteSubject);


  export default subjectRouter
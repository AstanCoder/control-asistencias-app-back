import { Router } from "express";
import {
  ListSemester,
  createSemester,
  deleteSemester,
  getSemester,
  updateSemester,
} from "./controller/semester.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const semesterRouter = Router();

semesterRouter
  .post("/semester", verifyToken, createSemester)
  .get("/semester/list",verifyToken, ListSemester)
  .get("/semester/:id", verifyToken, getSemester)
  .post("/semester/update/:id", verifyToken, updateSemester)
  .delete("/semester/delete/:id", verifyToken, deleteSemester);


  export default semesterRouter
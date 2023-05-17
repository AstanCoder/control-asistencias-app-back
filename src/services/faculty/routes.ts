import { Router } from "express";
import {
  ListFaculty,
  createFaculty,
  deleteFaculty,
  getFaculty,
  updateFaculty,
} from "./controller/faculty.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const facultyRouter = Router();

facultyRouter
  .post("/faculty", verifyToken, createFaculty)
  .get("/faculty/list",verifyToken, ListFaculty)
  .get("/faculty/:id", verifyToken, getFaculty)
  .post("/faculty/update/:id", verifyToken, updateFaculty)
  .delete("/faculty/delete/:id", verifyToken, deleteFaculty);


  export default facultyRouter
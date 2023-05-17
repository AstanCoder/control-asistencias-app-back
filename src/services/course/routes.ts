import { Router } from "express";
import {
  ListCourse,
  createCourse,
  deleteCourse,
  getCourse,
  updateCourse,
} from "./controller/course.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const courseRouter = Router();

courseRouter
  .post("/course", verifyToken, createCourse)
  .get("/course/list",verifyToken, ListCourse)
  .get("/course/:id", verifyToken, getCourse)
  .post("/course/update/:id", verifyToken, updateCourse)
  .delete("/course/delete/:id", verifyToken, deleteCourse);


  export default courseRouter
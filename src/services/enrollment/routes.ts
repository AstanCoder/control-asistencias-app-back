import { Router } from "express";
import {
  ListEnrollment,
  createEnrollment,
  deleteEnrollment,
  getEnrollment,
  updateEnrollment,
} from "./controller/enrollment.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const enrollmentRouter = Router();

enrollmentRouter
  .post("/enrollment", verifyToken, createEnrollment)
  .get("/enrollment/list",verifyToken, ListEnrollment)
  .get("/enrollment/:id", verifyToken, getEnrollment)
  .post("/enrollment/update/:id", verifyToken, updateEnrollment)
  .delete("/enrollment/delete/:id", verifyToken, deleteEnrollment);


  export default enrollmentRouter
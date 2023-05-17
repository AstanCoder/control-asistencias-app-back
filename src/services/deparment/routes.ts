import { Router } from "express";
import {
  ListDepartment,
  createDepartment,
  deleteDepartment,
  getDepartment,
  updateDepartment,
} from "./controller/deparment.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const deparmentRouter = Router();

deparmentRouter
  .post("/deparment", verifyToken, createDepartment)
  .get("/deparment/list",verifyToken, ListDepartment)
  .get("/deparment/:id", verifyToken, getDepartment)
  .post("/deparment/update/:id", verifyToken, updateDepartment)
  .delete("/deparment/delete/:id", verifyToken, deleteDepartment);


  export default deparmentRouter
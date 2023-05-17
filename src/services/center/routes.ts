import { Router } from "express";
import {
  ListCenter,
  createCenter,
  deleteCenter,
  getCenter,
  updateCenter,
} from "./controller/center.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const centerRouter = Router();

centerRouter
  .post("/center", verifyToken, createCenter)
  .get("/center/list",verifyToken, ListCenter)
  .get("/center/:id", verifyToken, getCenter)
  .post("/center/update/:id", verifyToken, updateCenter)
  .delete("/center/delete/:id", verifyToken, deleteCenter);


  export default centerRouter
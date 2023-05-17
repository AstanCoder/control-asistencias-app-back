import { Router } from "express";
import {
  ListCarreer,
  createCarreer,
  deleteCarreer,
  getCarreer,
  updateCarreer,
} from "./controller/carreer.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const carreerRouter = Router();

carreerRouter
  .post("/carreer", verifyToken, createCarreer)
  .get("/carreer/list",verifyToken, ListCarreer)
  .get("/carreer/:id", verifyToken, getCarreer)
  .post("/carreer/update/:id", verifyToken, updateCarreer)
  .delete("/carreer/delete/:id", verifyToken, deleteCarreer);


  export default carreerRouter
import { Router } from "express";
import {
  ListUser,
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "./controller/user.controllers";
import { verifyToken } from "../../middlewares/verifyToken";

const userRouter = Router();

userRouter
  .post("/user", verifyToken, createUser)
  .get("/user/list",verifyToken, ListUser)
  .get("/user/:id", verifyToken, getUser)
  .post("/user/update/:id", verifyToken, updateUser)
  .delete("/user/delete/:id", verifyToken, deleteUser);


  export default userRouter
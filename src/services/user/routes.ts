import { Router } from "express";
import {
  ListUser,
  createUser,
  deleteUser,
  getStudentsByProfessor,
  getUser,
  getUserData,
  updateUser,
} from "./controller/user.controllers";
import { verifyToken } from "../../middlewares/verifyToken";
import UserQuerys from "./querys/user.querys";

const userRouter = Router();

userRouter
  .post("/user", verifyToken, createUser)
  .get("/user/list", verifyToken, ListUser)
  .get("/user/get/:id", verifyToken, getUser)
  .post("/user/update/:id", verifyToken, updateUser)
  .delete("/user/delete/:id", verifyToken, deleteUser)
  .get("/user/profile", verifyToken, getUserData)
  .get("/user/students", verifyToken, getStudentsByProfessor);

export default userRouter;

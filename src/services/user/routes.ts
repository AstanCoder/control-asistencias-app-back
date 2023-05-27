import { Router } from "express";
import {
  ListUser,
  createUser,
  deleteUser,
  getProfessorTypes,
  getRoles,
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
  .get("/user/students", verifyToken, getStudentsByProfessor)
  .get("/user/roles", verifyToken, getRoles)
  .get("/user/professor/types", verifyToken, getProfessorTypes);

export default userRouter;

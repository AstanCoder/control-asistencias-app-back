import { Router } from "express";
import login from "./controller/login";

import { verifyToken } from "../../middlewares/verifyToken";
import { create_user, fill_user_type } from "./controller/create_user";
import create_student from "./controller/create_student";

import create_professor from "./controller/create_professor";

const authRouter = Router();

authRouter
  .post("/login", login)
  .post("/complete-auth/:userType", verifyToken, fill_user_type)
  .post("/create-user", verifyToken, create_user)
  .post("/create-student", verifyToken, create_student)
  .post("/create-professor", verifyToken, create_professor);

export default authRouter;

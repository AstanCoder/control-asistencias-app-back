"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("./controller/user.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const userRouter = (0, express_1.Router)();
userRouter
    .post("/user", verifyToken_1.verifyToken, user_controllers_1.createUser)
    .get("/user/list", verifyToken_1.verifyToken, user_controllers_1.ListUser)
    .get("/user/get/:id", verifyToken_1.verifyToken, user_controllers_1.getUser)
    .post("/user/update/:id", verifyToken_1.verifyToken, user_controllers_1.updateUser)
    .delete("/user/delete/:id", verifyToken_1.verifyToken, user_controllers_1.deleteUser)
    .get("/user/profile", verifyToken_1.verifyToken, user_controllers_1.getUserData)
    .get("/user/students", verifyToken_1.verifyToken, user_controllers_1.getStudentsByProfessor)
    .get("/user/roles", verifyToken_1.verifyToken, user_controllers_1.getRoles)
    .get("/user/professor/types", verifyToken_1.verifyToken, user_controllers_1.getRoles);
exports.default = userRouter;

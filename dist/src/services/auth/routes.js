"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("./controller/login"));
const verifyToken_1 = require("../../middlewares/verifyToken");
const create_user_1 = require("./controller/create_user");
const create_student_1 = __importDefault(require("./controller/create_student"));
const authRouter = (0, express_1.Router)();
authRouter
    .post("/login", login_1.default)
    .post("/complete-auth/:userType", verifyToken_1.verifyToken, create_user_1.fill_user_type)
    .post("/create-user", verifyToken_1.verifyToken, create_user_1.create_user)
    .post("/create-student", verifyToken_1.verifyToken, create_student_1.default);
exports.default = authRouter;

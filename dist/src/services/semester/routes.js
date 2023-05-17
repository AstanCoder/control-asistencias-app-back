"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const semester_controllers_1 = require("./controller/semester.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const semesterRouter = (0, express_1.Router)();
semesterRouter
    .post("/semester", verifyToken_1.verifyToken, semester_controllers_1.createSemester)
    .get("/semester/list", verifyToken_1.verifyToken, semester_controllers_1.ListSemester)
    .get("/semester/:id", verifyToken_1.verifyToken, semester_controllers_1.getSemester)
    .post("/semester/update/:id", verifyToken_1.verifyToken, semester_controllers_1.updateSemester)
    .delete("/semester/delete/:id", verifyToken_1.verifyToken, semester_controllers_1.deleteSemester);
exports.default = semesterRouter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_controllers_1 = require("./controller/subject.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const subjectRouter = (0, express_1.Router)();
subjectRouter
    .post("/subject", verifyToken_1.verifyToken, subject_controllers_1.createSubject)
    .get("/subject/list", verifyToken_1.verifyToken, subject_controllers_1.ListSubject)
    .get("/subject/:id", verifyToken_1.verifyToken, subject_controllers_1.getSubject)
    .post("/subject/update/:id", verifyToken_1.verifyToken, subject_controllers_1.updateSubject)
    .delete("/subject/delete/:id", verifyToken_1.verifyToken, subject_controllers_1.deleteSubject);
exports.default = subjectRouter;

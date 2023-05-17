"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faculty_controllers_1 = require("./controller/faculty.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const facultyRouter = (0, express_1.Router)();
facultyRouter
    .post("/faculty", verifyToken_1.verifyToken, faculty_controllers_1.createFaculty)
    .get("/faculty/list", verifyToken_1.verifyToken, faculty_controllers_1.ListFaculty)
    .get("/faculty/:id", verifyToken_1.verifyToken, faculty_controllers_1.getFaculty)
    .post("/faculty/update/:id", verifyToken_1.verifyToken, faculty_controllers_1.updateFaculty)
    .delete("/faculty/delete/:id", verifyToken_1.verifyToken, faculty_controllers_1.deleteFaculty);
exports.default = facultyRouter;

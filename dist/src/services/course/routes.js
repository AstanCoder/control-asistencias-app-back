"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controllers_1 = require("./controller/course.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const courseRouter = (0, express_1.Router)();
courseRouter
    .post("/course", verifyToken_1.verifyToken, course_controllers_1.createCourse)
    .get("/course/list", verifyToken_1.verifyToken, course_controllers_1.ListCourse)
    .get("/course/:id", verifyToken_1.verifyToken, course_controllers_1.getCourse)
    .post("/course/update/:id", verifyToken_1.verifyToken, course_controllers_1.updateCourse)
    .delete("/course/delete/:id", verifyToken_1.verifyToken, course_controllers_1.deleteCourse);
exports.default = courseRouter;

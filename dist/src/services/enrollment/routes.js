"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enrollment_controllers_1 = require("./controller/enrollment.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const enrollmentRouter = (0, express_1.Router)();
enrollmentRouter
    .post("/enrollment", verifyToken_1.verifyToken, enrollment_controllers_1.createEnrollment)
    .get("/enrollment/list", verifyToken_1.verifyToken, enrollment_controllers_1.ListEnrollment)
    .get("/enrollment/:id", verifyToken_1.verifyToken, enrollment_controllers_1.getEnrollment)
    .post("/enrollment/update/:id", verifyToken_1.verifyToken, enrollment_controllers_1.updateEnrollment)
    .delete("/enrollment/delete/:id", verifyToken_1.verifyToken, enrollment_controllers_1.deleteEnrollment);
exports.default = enrollmentRouter;

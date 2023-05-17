"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deparment_controllers_1 = require("./controller/deparment.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const deparmentRouter = (0, express_1.Router)();
deparmentRouter
    .post("/deparment", verifyToken_1.verifyToken, deparment_controllers_1.createDepartment)
    .get("/deparment/list", verifyToken_1.verifyToken, deparment_controllers_1.ListDepartment)
    .get("/deparment/:id", verifyToken_1.verifyToken, deparment_controllers_1.getDepartment)
    .post("/deparment/update/:id", verifyToken_1.verifyToken, deparment_controllers_1.updateDepartment)
    .delete("/deparment/delete/:id", verifyToken_1.verifyToken, deparment_controllers_1.deleteDepartment);
exports.default = deparmentRouter;

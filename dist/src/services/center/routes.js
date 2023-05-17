"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const center_controllers_1 = require("./controller/center.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const centerRouter = (0, express_1.Router)();
centerRouter
    .post("/center", verifyToken_1.verifyToken, center_controllers_1.createCenter)
    .get("/center/list", verifyToken_1.verifyToken, center_controllers_1.ListCenter)
    .get("/center/:id", verifyToken_1.verifyToken, center_controllers_1.getCenter)
    .post("/center/update/:id", verifyToken_1.verifyToken, center_controllers_1.updateCenter)
    .delete("/center/delete/:id", verifyToken_1.verifyToken, center_controllers_1.deleteCenter);
exports.default = centerRouter;

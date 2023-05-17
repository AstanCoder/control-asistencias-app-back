"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carreer_controllers_1 = require("./controller/carreer.controllers");
const verifyToken_1 = require("../../middlewares/verifyToken");
const carreerRouter = (0, express_1.Router)();
carreerRouter
    .post("/carreer", verifyToken_1.verifyToken, carreer_controllers_1.createCarreer)
    .get("/carreer/list", verifyToken_1.verifyToken, carreer_controllers_1.ListCarreer)
    .get("/carreer/:id", verifyToken_1.verifyToken, carreer_controllers_1.getCarreer)
    .post("/carreer/update/:id", verifyToken_1.verifyToken, carreer_controllers_1.updateCarreer)
    .delete("/carreer/delete/:id", verifyToken_1.verifyToken, carreer_controllers_1.deleteCarreer);
exports.default = carreerRouter;

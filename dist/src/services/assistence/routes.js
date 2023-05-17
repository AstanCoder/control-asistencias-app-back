"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../../middlewares/verifyToken");
const createAssistence_1 = require("./controller/createAssistence");
const updateAssistence_1 = require("./controller/updateAssistence");
const getAssitences_1 = require("./controller/getAssitences");
const assistenceRouter = (0, express_1.Router)();
assistenceRouter
    .post("/new", verifyToken_1.verifyToken, createAssistence_1.createAssistence)
    .post("/update/:userid/:subjectid/:date", verifyToken_1.verifyToken, updateAssistence_1.updateAssitence)
    .get("/get/:userid", verifyToken_1.verifyToken, getAssitences_1.getAssitences);
exports.default = assistenceRouter;

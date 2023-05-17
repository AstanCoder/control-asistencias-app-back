"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
require("dotenv/config");
const jwt_1 = require("../helpers/jwt");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = req.headers.authorization;
        const token = header.split(" ")[1];
        if (!token)
            return res.status(401).json({ message: "Access denied" });
        const payload = (0, jwt_1.verifyAuthToken)(token);
        req.user_id = payload.id;
        return next();
    }
    catch (e) {
        return res.status(404).json({ message: "Token invalid" });
    }
});
exports.verifyToken = verifyToken;

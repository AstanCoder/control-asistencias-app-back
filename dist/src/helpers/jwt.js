"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthToken = exports.createAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const createAuthToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, secret);
    return token;
};
exports.createAuthToken = createAuthToken;
const verifyAuthToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return decoded;
    }
    catch (error) {
        throw new Error("The Access token is invalid");
    }
};
exports.verifyAuthToken = verifyAuthToken;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill_user_type = exports.create_user = void 0;
const auth_querys_1 = require("../querys/auth.querys");
const bcrypt_1 = __importDefault(require("bcrypt"));
const create_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let payload = req.body;
        const _password = payload.password;
        const salts = bcrypt_1.default.genSaltSync(10);
        const hash = bcrypt_1.default.hashSync(_password, salts);
        payload.password = hash;
        const create_user = yield (0, auth_querys_1.createUserQuery)(payload);
        return res.status(200).json({ result: create_user });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.create_user = create_user;
const fill_user_type = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userType: role } = req.params;
        if (role === "professor") {
            const payload = req.body;
            const fill_info = yield (0, auth_querys_1.fillProfessorInfoQuery)(payload);
            return res.status(200).json({ result: fill_info });
        }
        if (role === "student") {
            const payload = req.body;
            const fill_info = yield (0, auth_querys_1.fillStudentInfoQuery)(payload);
            return res.status(200).json({ result: fill_info });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.fill_user_type = fill_user_type;

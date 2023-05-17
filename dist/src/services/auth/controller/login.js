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
const auth_querys_1 = require("../querys/auth.querys");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../../../helpers/jwt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { email } = payload;
        const userdata = yield (0, auth_querys_1.searchUserByEmailQuery)(email);
        const user = userdata;
        const { password } = user[0];
        const matches = bcrypt_1.default.compareSync(payload.password, password);
        if (!matches) {
            return res.status(401).json({
                message: "Contraseña incorrecta",
            });
        }
        const token = (0, jwt_1.createAuthToken)({ id: user[0].id, email: payload.email });
        res.status(200).json({ token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.default = login;

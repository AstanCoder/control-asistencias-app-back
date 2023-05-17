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
exports.getUserQuery = void 0;
const database_1 = require("../../../database");
const createUserQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO usuario SET ? ", [payload]);
    return result;
});
const updateUserQuery = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE usuario SET ? WHERE id = ? ", [
        payload,
        id,
    ]);
    return result;
});
const listUserQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM usuario");
    return result;
});
const getUserQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM usuario WHERE id = ?", [id]);
    return result;
});
exports.getUserQuery = getUserQuery;
const deleteUserQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("DELETE FROM usuario WHERE id = ?", [id]);
    return result;
});
const UserQuerys = {
    createUserQuery,
    updateUserQuery,
    listUserQuery,
    deleteUserQuery,
    getUserQuery: exports.getUserQuery
};
exports.default = UserQuerys;

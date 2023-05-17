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
exports.getCenterQuery = void 0;
const database_1 = require("../../../database");
const createCenterQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO centro SET ? ", [payload]);
    return result;
});
const updateCenterQuery = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE centro SET ? WHERE id = ? ", [
        payload,
        id,
    ]);
    return result;
});
const listCenterQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM centro");
    return result;
});
const getCenterQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM centro WHERE id = ?", [id]);
    return result;
});
exports.getCenterQuery = getCenterQuery;
const deleteCenterQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("DELETE FROM centro WHERE id = ?", [id]);
    return result;
});
const CenterQuerys = {
    createCenterQuery,
    updateCenterQuery,
    listCenterQuery,
    deleteCenterQuery,
    getCenterQuery: exports.getCenterQuery
};
exports.default = CenterQuerys;

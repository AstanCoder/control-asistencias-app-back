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
exports.getSemesterQuery = void 0;
const database_1 = require("../../../database");
const createSemesterQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO semestre SET ? ", [payload]);
    return result;
});
const updateSemesterQuery = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE semestre SET ? WHERE id = ? ", [
        payload,
        id,
    ]);
    return result;
});
const listSemesterQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM semestre");
    return result;
});
const getSemesterQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM semestre WHERE id = ?", [
        id,
    ]);
    return result;
});
exports.getSemesterQuery = getSemesterQuery;
const deleteSemesterQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("DELETE FROM semestre WHERE id = ?", [id]);
    return result;
});
const SemesterQuerys = {
    createSemesterQuery,
    updateSemesterQuery,
    listSemesterQuery,
    deleteSemesterQuery,
    getSemesterQuery: exports.getSemesterQuery,
};
exports.default = SemesterQuerys;

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
exports.getSubjectQuery = void 0;
const database_1 = require("../../../database");
const createSubjectQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO materia SET ? ", [payload]);
    return result;
});
const updateSubjectQuery = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE materia SET ? WHERE id = ? ", [
        payload,
        id,
    ]);
    return result;
});
const listSubjectQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM materia");
    return result;
});
const getSubjectQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM materia WHERE id = ?", [id]);
    return result;
});
exports.getSubjectQuery = getSubjectQuery;
const deleteSubjectQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("DELETE FROM materia WHERE id = ?", [id]);
    return result;
});
const SubjectQuerys = {
    createSubjectQuery,
    updateSubjectQuery,
    listSubjectQuery,
    deleteSubjectQuery,
    getSubjectQuery: exports.getSubjectQuery
};
exports.default = SubjectQuerys;

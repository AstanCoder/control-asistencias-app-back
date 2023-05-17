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
exports.getEnrollmentQuery = void 0;
const database_1 = require("../../../database");
const createEnrollmentQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO matricula SET ? ", [payload]);
    return result;
});
const updateEnrollmentQuery = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE matricula SET ? WHERE id = ? ", [
        payload,
        id,
    ]);
    return result;
});
const listEnrollmentQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM matricula");
    return result;
});
const getEnrollmentQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM matricula WHERE id = ?", [id]);
    return result;
});
exports.getEnrollmentQuery = getEnrollmentQuery;
const deleteEnrollmentQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("DELETE FROM matricula WHERE id = ?", [id]);
    return result;
});
const EnrollmentQuerys = {
    createEnrollmentQuery,
    updateEnrollmentQuery,
    listEnrollmentQuery,
    deleteEnrollmentQuery,
    getEnrollmentQuery: exports.getEnrollmentQuery
};
exports.default = EnrollmentQuerys;

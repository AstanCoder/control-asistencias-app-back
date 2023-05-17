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
exports.getFacultyQuery = void 0;
const database_1 = require("../../../database");
const createFacultyQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO facultad SET ? ", [payload]);
    return result;
});
const updateFacultyQuery = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE facultad SET ? WHERE id = ? ", [
        payload,
        id,
    ]);
    return result;
});
const listFacultyQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM facultad");
    return result;
});
const getFacultyQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM facultad WHERE id = ?", [id]);
    return result;
});
exports.getFacultyQuery = getFacultyQuery;
const deleteFacultyQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("DELETE FROM facultad WHERE id = ?", [id]);
    return result;
});
const FacultyQuerys = {
    createFacultyQuery,
    updateFacultyQuery,
    listFacultyQuery,
    deleteFacultyQuery,
    getFacultyQuery: exports.getFacultyQuery
};
exports.default = FacultyQuerys;

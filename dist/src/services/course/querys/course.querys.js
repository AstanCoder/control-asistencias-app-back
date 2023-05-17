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
exports.getCourseQuery = void 0;
const database_1 = require("../../../database");
const createCourseQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO curso SET ? ", [payload]);
    return result;
});
const updateCourseQuery = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE curso SET ? WHERE id = ? ", [
        payload,
        id,
    ]);
    return result;
});
const listCourseQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM curso");
    return result;
});
const getCourseQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM curso WHERE id = ?", [id]);
    return result;
});
exports.getCourseQuery = getCourseQuery;
const deleteCourseQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("DELETE FROM curso WHERE id = ?", [id]);
    return result;
});
const CourseQuerys = {
    createCourseQuery,
    updateCourseQuery,
    listCourseQuery,
    deleteCourseQuery,
    getCourseQuery: exports.getCourseQuery
};
exports.default = CourseQuerys;

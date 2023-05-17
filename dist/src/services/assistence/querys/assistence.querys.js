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
exports.getAssistencesPerUserSubjectAndDate = exports.getAssitencesPerUserAndSubject = exports.getAssitencesPerUserQuery = exports.getAssitenceQuery = exports.modifyAssistenceQuery = exports.createAssistenceQuery = void 0;
const database_1 = require("../../../database");
const createAssistenceQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO asistencia SET ? ", payload);
    return result;
});
exports.createAssistenceQuery = createAssistenceQuery;
const modifyAssistenceQuery = (payload, user_id, subject_id, date) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("UPDATE asstencia SET ? WHERE estudiante_usuario_id = ? AND materia_id = ? AND fecha = ?", [payload, user_id, subject_id, date]);
    return result;
});
exports.modifyAssistenceQuery = modifyAssistenceQuery;
const getAssitenceQuery = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAssitenceQuery = getAssitenceQuery;
const getAssitencesPerUserQuery = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM asistencia WHERE estudiante_usuario_id = ?", [userid]);
    return {
        result,
    };
});
exports.getAssitencesPerUserQuery = getAssitencesPerUserQuery;
const getAssitencesPerUserAndSubject = (userid, subjectid) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM asistencia WHERE estudiante_usuario_id = ? AND materia_id = ?", [userid, subjectid]);
    return {
        result,
    };
});
exports.getAssitencesPerUserAndSubject = getAssitencesPerUserAndSubject;
const getAssistencesPerUserSubjectAndDate = (userid, subjectid, date) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM asistencia WHERE estudiante_usuario_id = ? AND materia_id = ? AND fecha = ?", [userid, subjectid, date]);
    return {
        result,
    };
});
exports.getAssistencesPerUserSubjectAndDate = getAssistencesPerUserSubjectAndDate;

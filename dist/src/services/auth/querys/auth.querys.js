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
exports.createProfessorQuery = exports.createStudentQuery = exports.searchUserByEmailQuery = exports.searchUserByIdQuery = exports.fillStudentInfoQuery = exports.fillProfessorInfoQuery = exports.createUserQuery = void 0;
const database_1 = require("../../../database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO usuario SET ? ", payload);
    return result;
});
exports.createUserQuery = createUserQuery;
const fillProfessorInfoQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO profesor SET ? ", payload);
    return result;
});
exports.fillProfessorInfoQuery = fillProfessorInfoQuery;
const fillStudentInfoQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("INSERT INTO estudiante SET ? ", payload);
    return result;
});
exports.fillStudentInfoQuery = fillStudentInfoQuery;
const searchUserByIdQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT id, email FROM usuario WHERE id = ? ", [id]);
    return result;
});
exports.searchUserByIdQuery = searchUserByIdQuery;
const searchUserByEmailQuery = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT id, email, password FROM usuario WHERE email = ? ", [email]);
    return result;
});
exports.searchUserByEmailQuery = searchUserByEmailQuery;
const createStudentQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { esRepitente, matricula_id } = payload;
    const { name, surname, password, email, ci, centro_id, rol_id } = payload;
    const salts = bcrypt_1.default.genSaltSync(10);
    const hash = bcrypt_1.default.hashSync(password, salts);
    const userdata = {
        name,
        surname,
        password: hash,
        email,
        ci,
        centro_id,
        rol_id,
    };
    const [user] = yield database_1.pool.query("INSERT INTO usuario SET ? ", [userdata]);
    const created_user = yield (0, exports.searchUserByEmailQuery)(userdata.email);
    const _created_user = created_user;
    const user_id = _created_user[0].id;
    const student_data = {
        usuario_id: user_id,
        matricula_id,
        esRepitente: esRepitente,
    };
    const [student] = yield database_1.pool.query("INSERT INTO estudiante SET ?", [
        student_data,
    ]);
    console.log(student);
    return student;
});
exports.createStudentQuery = createStudentQuery;
const createProfessorQuery = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_profesor_id, departamento_id } = payload;
    const { name, surname, password, email, ci, centro_id, rol_id } = payload;
    const salts = bcrypt_1.default.genSaltSync(10);
    const hash = bcrypt_1.default.hashSync(password, salts);
    const userdata = {
        name,
        surname,
        password: hash,
        email,
        ci,
        centro_id,
        rol_id,
    };
    const [user] = yield database_1.pool.query("INSERT INTO usuario SET ? ", [userdata]);
    const created_user = yield (0, exports.searchUserByEmailQuery)(userdata.email);
    const _created_user = created_user;
    const user_id = _created_user[0].id;
    const professor_data = {
        usuario_id: user_id,
        tipo_profesor_id,
        departamento_id,
    };
    const [professor] = yield database_1.pool.query("INSERT INTO estudiante SET ?", [
        professor_data,
    ]);
    console.log(professor_data);
    return professor;
});
exports.createProfessorQuery = createProfessorQuery;

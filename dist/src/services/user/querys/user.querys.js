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
const getUserDataQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let userdata = {};
    const [res] = (yield database_1.pool.query("SELECT id, name, surname, ci, rol_id FROM usuario WHERE id = ?", [id]));
    const [role] = (yield database_1.pool.query("SELECT value FROM rol WHERE id = ?", [res[0].rol_id]));
    if (role[0].value === "student") {
        const [studentdata] = (yield database_1.pool.query("SELECT esRepitente FROM estudiante WHERE usuario_id = ?", [id]));
        userdata = Object.assign({}, studentdata[0]);
    }
    if (role[0].value === "professor") {
        const [professor] = (yield database_1.pool.query("SELECT departamento_id, tipo_profesor_id FROM profesor WHERE usuario_id = ?", [id]));
        const [professor_type] = (yield database_1.pool.query("SELECT value FROM tipo_profesor WHERE id = ? ", [
            professor[0].tipo_profesor_id,
        ]));
        const [department] = (yield database_1.pool.query("SELECT nombre FROM departamento WHERE id = ?", [
            professor[0].departamento_id,
        ]));
        userdata = Object.assign(Object.assign({}, professor[0]), { tipo_profesor: professor_type[0].value, departamento: department[0].nombre });
    }
    return Object.assign(Object.assign({ role: role[0].value }, res[0]), userdata);
});
const getStudentsByProfessorQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [enrollment] = (yield database_1.pool.query("CALL get_enrollment_by_professor(?)", [id]));
    const [students] = (yield database_1.pool.query("SELECT 'estudiante'.'esRepitente', 'usuario'.'name' AS 'nombre', 'usuario'.'ci' AS 'ci' FROM estudiante JOIN 'usuario' ON 'estudiante'.'usuario_id' = 'usuario'.'id' WHERE 'estudiante'.'matricula_id' = ?", [enrollment[0].id]));
    return students;
});
const getRolesQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM rol");
    return result;
});
const getProfessorTypesQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.pool.query("SELECT * FROM tipo_profesor");
    return result;
});
const UserQuerys = {
    createUserQuery,
    updateUserQuery,
    listUserQuery,
    deleteUserQuery,
    getUserQuery: exports.getUserQuery,
    getUserDataQuery,
    getStudentsByProfessorQuery,
    getRolesQuery,
    getProfessorTypesQuery,
};
exports.default = UserQuerys;

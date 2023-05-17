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
exports.isFirstTime = exports.isConn = exports.pool = void 0;
const promise_1 = require("mysql2/promise");
require("dotenv/config");
exports.pool = (0, promise_1.createPool)({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    port: Number(process.env.MYSQL_PORT) || 3306,
    database: process.env.MYSQL_DB || "assistencedb",
});
const isConn = () => __awaiter(void 0, void 0, void 0, function* () {
    const [res] = yield exports.pool.query("SELECT NOW()");
    return res;
});
exports.isConn = isConn;
const isFirstTime = () => __awaiter(void 0, void 0, void 0, function* () {
    const [count] = yield exports.pool.query("SELECT count(*) AS TOTALNUMBEROFTABLES FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'assistencedb'");
    const _count = count;
    if (_count[0].TOTALNUMBEROFTABLES === 0) {
        return true;
    }
    return false;
});
exports.isFirstTime = isFirstTime;

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
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./src/app"));
const database_1 = require("./src/database");
const server = new http_1.default.Server(app_1.default);
server.listen(app_1.default.get("port"), () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`[Server] Listening on port ${app_1.default.get("port")}`);
    console.log(yield (0, database_1.isConn)());
    if (yield (0, database_1.isFirstTime)()) {
        console.log('[Server Config] This app apears to be running for the first time in this enviroment, run "npm run config" or navigate to "/admin/setup" on your browser to start the initial config process');
    }
    console.log(`[Server] DATABASE CONNECTED`);
}));

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
exports.deleteSemester = exports.getSemester = exports.updateSemester = exports.ListSemester = exports.createSemester = void 0;
const semester_querys_1 = __importDefault(require("../querys/semester.querys"));
const createSemester = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield semester_querys_1.default.createSemesterQuery(payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.createSemester = createSemester;
const ListSemester = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semester_querys_1.default.listSemesterQuery();
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.ListSemester = ListSemester;
const updateSemester = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const result = yield semester_querys_1.default.updateSemesterQuery(Number(id), payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.updateSemester = updateSemester;
const getSemester = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield semester_querys_1.default.getSemesterQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.getSemester = getSemester;
const deleteSemester = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield semester_querys_1.default.deleteSemesterQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.deleteSemester = deleteSemester;

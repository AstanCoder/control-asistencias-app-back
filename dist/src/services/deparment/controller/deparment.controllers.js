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
exports.deleteDepartment = exports.getDepartment = exports.updateDepartment = exports.ListDepartment = exports.createDepartment = void 0;
const deparment_querys_1 = __importDefault(require("../querys/deparment.querys"));
const createDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield deparment_querys_1.default.createDepartmentQuery(payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.createDepartment = createDepartment;
const ListDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield deparment_querys_1.default.listDepartmentQuery();
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.ListDepartment = ListDepartment;
const updateDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const result = yield deparment_querys_1.default.updateDepartmentQuery(Number(id), payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.updateDepartment = updateDepartment;
const getDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield deparment_querys_1.default.getDepartmentQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.getDepartment = getDepartment;
const deleteDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield deparment_querys_1.default.deleteDepartmentQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.deleteDepartment = deleteDepartment;

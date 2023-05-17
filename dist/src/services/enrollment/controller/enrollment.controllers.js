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
exports.deleteEnrollment = exports.getEnrollment = exports.updateEnrollment = exports.ListEnrollment = exports.createEnrollment = void 0;
const enrollment_querys_1 = __importDefault(require("../querys/enrollment.querys"));
const createEnrollment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield enrollment_querys_1.default.createEnrollmentQuery(payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.createEnrollment = createEnrollment;
const ListEnrollment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield enrollment_querys_1.default.listEnrollmentQuery();
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.ListEnrollment = ListEnrollment;
const updateEnrollment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const result = yield enrollment_querys_1.default.updateEnrollmentQuery(Number(id), payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.updateEnrollment = updateEnrollment;
const getEnrollment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield enrollment_querys_1.default.getEnrollmentQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.getEnrollment = getEnrollment;
const deleteEnrollment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield enrollment_querys_1.default.deleteEnrollmentQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.deleteEnrollment = deleteEnrollment;

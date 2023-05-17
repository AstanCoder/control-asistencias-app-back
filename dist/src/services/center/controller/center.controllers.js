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
exports.deleteCenter = exports.getCenter = exports.updateCenter = exports.ListCenter = exports.createCenter = void 0;
const center_querys_1 = __importDefault(require("../querys/center.querys"));
const createCenter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield center_querys_1.default.createCenterQuery(payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.createCenter = createCenter;
const ListCenter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield center_querys_1.default.listCenterQuery();
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.ListCenter = ListCenter;
const updateCenter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const result = yield center_querys_1.default.updateCenterQuery(Number(id), payload);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.updateCenter = updateCenter;
const getCenter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield center_querys_1.default.getCenterQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.getCenter = getCenter;
const deleteCenter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield center_querys_1.default.deleteCenterQuery(Number(id));
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.deleteCenter = deleteCenter;

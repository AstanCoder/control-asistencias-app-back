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
exports.updateAssitence = void 0;
const assistence_querys_1 = require("../querys/assistence.querys");
const updateAssitence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userid, subjectid, date } = req.params;
        const payload = req.body;
        const _date = new Date(date);
        const result = yield (0, assistence_querys_1.modifyAssistenceQuery)(payload, Number(userid), Number(subjectid), _date);
        return res.status(200).json({ result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.updateAssitence = updateAssitence;

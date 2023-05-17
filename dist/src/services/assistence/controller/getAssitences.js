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
exports.getAssitences = void 0;
const assistence_querys_1 = require("../querys/assistence.querys");
const getAssitences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userid } = req.params;
        const { searchType, subject_id } = req.query;
        if (searchType === "user" || !searchType) {
            const assitences = yield (0, assistence_querys_1.getAssitencesPerUserQuery)(Number(userid));
            return res.status(200).send(assitences);
        }
        if (searchType === "subject") {
            const assistences = yield (0, assistence_querys_1.getAssitencesPerUserAndSubject)(Number(userid), Number(subject_id));
            return res.status(200).send(assistences);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.getAssitences = getAssitences;

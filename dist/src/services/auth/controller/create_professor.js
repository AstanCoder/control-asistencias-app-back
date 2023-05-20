"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_querys_1 = require("../querys/auth.querys");
const create_professor = (req, res) => {
    try {
        const result = (0, auth_querys_1.createProfessorQuery)(req.body);
        return res.status(200).json({ result: result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
exports.default = create_professor;

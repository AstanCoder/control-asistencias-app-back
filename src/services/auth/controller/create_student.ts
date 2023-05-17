import { Request, Response } from "express";
import { createStudentQuery } from "../querys/auth.querys";

const create_student = (req: Request, res: Response) => {
  try {
    const result = createStudentQuery(req.body);

    return res.status(200).json({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default create_student;

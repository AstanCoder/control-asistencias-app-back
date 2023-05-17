import { Request, Response } from "express";
import { Assistence } from "../../../types/assistence";
import { createAssistenceQuery } from "../querys/assistence.querys";

export const createAssistence = async (req: Request, res: Response) => {
  try {
    const payload = <Assistence>req.body;

    const result = await createAssistenceQuery(payload);

    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

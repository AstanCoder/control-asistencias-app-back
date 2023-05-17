import { Request, Response } from "express";
import { Assistence } from "../../../types/assistence";
import { modifyAssistenceQuery } from "../querys/assistence.querys";

export const updateAssitence = async (req: Request, res: Response) => {
  try {
    const { userid, subjectid, date } = req.params;
    const payload = <Partial<Assistence>>req.body;

    const _date = new Date(date);

    const result = await modifyAssistenceQuery(
      payload,
      Number(userid),
      Number(subjectid),
      _date
    );

    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

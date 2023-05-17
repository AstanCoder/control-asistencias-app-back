import { Request, Response } from "express";
import {
  getAssitencesPerUserAndSubject,
  getAssitencesPerUserQuery,
} from "../querys/assistence.querys";

export const getAssitences = async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;
    const { searchType, subject_id } = req.query;

    if (searchType === "user" || !searchType) {
      const assitences = await getAssitencesPerUserQuery(Number(userid));
      return res.status(200).send(assitences);
    }

    if (searchType === "subject") {
      const assistences = await getAssitencesPerUserAndSubject(
        Number(userid),
        Number(subject_id)
      );
      return res.status(200).send(assistences);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

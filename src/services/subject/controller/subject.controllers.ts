import { Request, Response } from "express";
import { Subject } from "../../../types/subject";
import SubjectQuerys from "../querys/subject.querys";

export const createSubject = async (req: Request, res: Response) => {
  try {
    const payload = <Subject>req.body;
    const result = await SubjectQuerys.createSubjectQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListSubject = async (req: Request, res: Response) => {
  try {
    const result = await SubjectQuerys.listSubjectQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const payload = <Subject>req.body;
    const { id } = req.params;
    const result = await SubjectQuerys.updateSubjectQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getSubject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SubjectQuerys.getSubjectQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SubjectQuerys.deleteSubjectQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

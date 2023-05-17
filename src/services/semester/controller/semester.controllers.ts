import { Request, Response } from "express";
import { Semester } from "../../../types/semester";
import SemesterQuerys from "../querys/semester.querys";

export const createSemester = async (req: Request, res: Response) => {
  try {
    const payload = <Semester>req.body;
    const result = await SemesterQuerys.createSemesterQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListSemester = async (req: Request, res: Response) => {
  try {
    const result = await SemesterQuerys.listSemesterQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateSemester = async (req: Request, res: Response) => {
  try {
    const payload = <Semester>req.body;
    const { id } = req.params;
    const result = await SemesterQuerys.updateSemesterQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getSemester = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SemesterQuerys.getSemesterQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteSemester = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SemesterQuerys.deleteSemesterQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

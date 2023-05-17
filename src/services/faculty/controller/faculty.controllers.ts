import { Request, Response } from "express";
import { Faculty } from "../../../types/faculty";
import FacultyQuerys from "../querys/faculty.querys";

export const createFaculty = async (req: Request, res: Response) => {
  try {
    const payload = <Faculty>req.body;
    const result = await FacultyQuerys.createFacultyQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListFaculty = async (req: Request, res: Response) => {
  try {
    const result = await FacultyQuerys.listFacultyQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateFaculty = async (req: Request, res: Response) => {
  try {
    const payload = <Faculty>req.body;
    const { id } = req.params;
    const result = await FacultyQuerys.updateFacultyQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getFaculty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await FacultyQuerys.getFacultyQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteFaculty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await FacultyQuerys.deleteFacultyQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

import { Request, Response } from "express";
import { Department } from "../../../types/department";
import DepartmentQuerys from "../querys/deparment.querys";

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const payload = <Department>req.body;
    const result = await DepartmentQuerys.createDepartmentQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListDepartment = async (req: Request, res: Response) => {
  try {
    const result = await DepartmentQuerys.listDepartmentQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const payload = <Department>req.body;
    const { id } = req.params;
    const result = await DepartmentQuerys.updateDepartmentQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getDepartment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await DepartmentQuerys.getDepartmentQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await DepartmentQuerys.deleteDepartmentQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

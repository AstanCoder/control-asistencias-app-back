import { Request, Response } from "express";
import { Enrollment } from "../../../types/enrollment";
import EnrollmentQuerys from "../querys/enrollment.querys";

export const createEnrollment = async (req: Request, res: Response) => {
  try {
    const payload = <Enrollment>req.body;
    const result = await EnrollmentQuerys.createEnrollmentQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListEnrollment = async (req: Request, res: Response) => {
  try {
    const result = await EnrollmentQuerys.listEnrollmentQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateEnrollment = async (req: Request, res: Response) => {
  try {
    const payload = <Enrollment>req.body;
    const { id } = req.params;
    const result = await EnrollmentQuerys.updateEnrollmentQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getEnrollment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await EnrollmentQuerys.getEnrollmentQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteEnrollment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await EnrollmentQuerys.deleteEnrollmentQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

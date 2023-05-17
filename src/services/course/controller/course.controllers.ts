import { Request, Response } from "express";
import { Course } from "../../../types/course";
import CourseQuerys from "../querys/course.querys";

export const createCourse = async (req: Request, res: Response) => {
  try {
    const payload = <Course>req.body;
    const result = await CourseQuerys.createCourseQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListCourse = async (req: Request, res: Response) => {
  try {
    const result = await CourseQuerys.listCourseQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const payload = <Course>req.body;
    const { id } = req.params;
    const result = await CourseQuerys.updateCourseQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CourseQuerys.getCourseQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CourseQuerys.deleteCourseQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

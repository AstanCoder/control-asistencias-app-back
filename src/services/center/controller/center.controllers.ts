import { Request, Response } from "express";
import { Center } from "../../../types/center";
import CenterQuerys from "../querys/center.querys";

export const createCenter = async (req: Request, res: Response) => {
  try {
    const payload = <Center>req.body;
    const result = await CenterQuerys.createCenterQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListCenter = async (req: Request, res: Response) => {
  try {
    const result = await CenterQuerys.listCenterQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateCenter = async (req: Request, res: Response) => {
  try {
    const payload = <Center>req.body;
    const { id } = req.params;
    const result = await CenterQuerys.updateCenterQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getCenter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CenterQuerys.getCenterQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteCenter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CenterQuerys.deleteCenterQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

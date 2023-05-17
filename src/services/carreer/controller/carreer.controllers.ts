import { Request, Response } from "express";
import { Carreer } from "../../../types/carreer";
import carreerQuerys from "../querys/career.querys";

export const createCarreer = async (req: Request, res: Response) => {
  try {
    const payload = <Carreer>req.body;
    const result = await carreerQuerys.createCarreerQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListCarreer = async (req: Request, res: Response) => {
  try {
    const result = await carreerQuerys.listCarrerQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateCarreer = async (req: Request, res: Response) => {
  try {
    const payload = <Carreer>req.body;
    const { id } = req.params;
    const result = await carreerQuerys.updateCarreerQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getCarreer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await carreerQuerys.getCarreerQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteCarreer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await carreerQuerys.deleteCarreerQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

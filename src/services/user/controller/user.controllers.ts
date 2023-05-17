import { Request, Response } from "express";
import { User } from "../../../types/user";
import UserQuerys from "../querys/user.querys";

export const createUser = async (req: Request, res: Response) => {
  try {
    const payload = <User>req.body;
    const result = await UserQuerys.createUserQuery(payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const ListUser = async (req: Request, res: Response) => {
  try {
    const result = await UserQuerys.listUserQuery();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const payload = <User>req.body;
    const { id } = req.params;
    const result = await UserQuerys.updateUserQuery(Number(id), payload);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserQuerys.getUserQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserQuerys.deleteUserQuery(Number(id));
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

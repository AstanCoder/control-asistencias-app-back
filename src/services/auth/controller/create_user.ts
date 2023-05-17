import { Request, Response } from "express";
import { CreateUserPayload } from "../../../types/auth";
import {
  createUserQuery,
  fillProfessorInfoQuery,
  fillStudentInfoQuery,
} from "../querys/auth.querys";
import { CreateStudentPayload } from "../../../types/student";
import { CreateProfessorPayload } from "../../../types/professor";
import bcrypt from "bcrypt";

export const create_user = async (req: Request, res: Response) => {
  try {
    let payload = <CreateUserPayload>req.body;

    const _password = payload.password;
    const salts = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(_password, salts);
    payload.password = hash;

    const create_user = await createUserQuery(payload);

    return res.status(200).json({ result: create_user });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const fill_user_type = async (req: Request, res: Response) => {
  try {
    const { userType: role } = req.params;
    if (role === "professor") {
      const payload = <CreateProfessorPayload>req.body;
      const fill_info = await fillProfessorInfoQuery(payload);
      return res.status(200).json({ result: fill_info });
    }
    if (role === "student") {
      const payload = <CreateStudentPayload>req.body;
      const fill_info = await fillStudentInfoQuery(payload);
      return res.status(200).json({ result: fill_info });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

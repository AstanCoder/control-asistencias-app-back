import { LoginPayload } from "../../../types/auth";
import { Request, Response } from "express";
import { searchUserByEmailQuery } from "../querys/auth.querys";
import bcrypt from "bcrypt";
import { RowDataPacket } from "mysql2";
import { createAuthToken } from "../../../helpers/jwt";

const login = async (req: Request, res: Response) => {
  try {
    const payload = <LoginPayload>req.body;

    const { email } = payload;

    const userdata = <RowDataPacket>await searchUserByEmailQuery(email);

    const { password } = userdata;

    const matches = bcrypt.compareSync(payload.password, password);

    if (!matches) {
      return res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }

    const token = createAuthToken({ id: userdata.id, email: payload.email });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default login;

import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { verifyAuthToken } from "../helpers/jwt";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = <string>req.headers.authorization;

    const token = header.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Access denied" });

    const payload = verifyAuthToken(token);

    req.user_id = payload.id;

    return next();
  } catch (e) {
    return res.status(404).json({ message: "Token invalid" });
  }
};

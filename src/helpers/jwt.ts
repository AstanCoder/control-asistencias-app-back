import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwt";

const secret = <string>process.env.JWT_SECRET;

export const createAuthToken = (payload: JwtPayload) => {
  const token = jwt.sign(payload, secret);

  return token;
};

export const verifyAuthToken = (token: string): JwtPayload => {
  try {
    const decoded: any = jwt.verify(token, secret);

    return decoded;
  } catch (error) {
    throw new Error("The Access token is invalid")
  }
};

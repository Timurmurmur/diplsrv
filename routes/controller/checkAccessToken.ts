import jwt from "jsonwebtoken";
import { Request } from "express";

export const checkAccessToken = (req: Request) => {
  const { accessToken } = req.body;

  console.log(accessToken);
};

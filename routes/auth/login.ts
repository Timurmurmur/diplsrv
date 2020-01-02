import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { options, _SECRET, access_header } from "../common/constants";
import { createJwtPare } from "../controller/createJwtPare";

export const loginFunc = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { accessToken } = createJwtPare({ email, password });
  res.send(JSON.stringify({ accessToken: accessToken }));
  res.end();
};

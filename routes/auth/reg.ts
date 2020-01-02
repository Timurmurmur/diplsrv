import { Request, Response } from "express";
import { _SECRET } from "../common/constants";
import { createJwtPare } from "../controller/createJwtPare";
export const regFunc = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const pare = createJwtPare({ email, password });

  console.log(pare);

  res.send(JSON.stringify({ pare }));
};

import jwt from "jsonwebtoken";
import { Request, Response } from "express";
let secret = "timurmurmur";
export const authFunc = (req: Request, res: Response) => {
  let token = jwt.sign(
    {
      data: "foobar"
    },
    secret,
    { expiresIn: "1d", encoding: "utf8" }
  );
  console.log(token);
  jwt.verify(token, secret, (err, decoded) => {
    if (err) console.log(err);
    console.log(decoded);
  });
};

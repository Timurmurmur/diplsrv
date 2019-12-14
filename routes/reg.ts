import jwt from "jsonwebtoken";
import { Request, Response } from "express";
const request = {
  login: "bart@gmail.com",
  pass: "1234567"
};
let secret = "euhrpgsiaogrgjajv[raog[oairgoaijgasohbguish";
export const authFunc = (req: Request, res: Response) => {
  let accesstoken = jwt.sign(
    {
      login: request.login,
      pass: request.pass
    },
    secret,
    { expiresIn: "1d", encoding: "utf8" }
  );
  console.log(accesstoken);
  jwt.verify(accesstoken, secret, (err, decoded) => {
    if (err) console.log(err);
    console.log(decoded);
  });
};

import jwt from "jsonwebtoken";
import { Request, Response } from "express";
const request = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImJhcnRAZ21haWwuY29tIiwicGFzcyI6IjEyMzQ1NjciLCJpYXQiOjE1NzYzNDg3OTgsImV4cCI6MTU3NjQzNTE5OH0.bdK_kBQmK6pWxPJEot1hDACNjrkf-ffBhXqzUDajMt4"
};
let secret = "euhrpgsiaogrgjajv[raog[oairgoaijgasohbguish";
export const authFunc = (req: Request, res: Response) => {
  jwt.verify(request.token, secret, (err, decoded) => {
    if (err) console.log(err);
    console.log(decoded);
  });
};

import express from "express";
import { Request, Response } from "express";
import { authFunc } from "./auth";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("hello world");

  res.end();
});
app.get("/auth", (req: Request, res: Response) => {
  authFunc(req, res);
  res.header(req.headers);
  res.sendStatus(200);
  res.end();
});

app.listen(80);

import express from "express";
import { Request, Response } from "express";
import { authFunc } from "./auth";
import { dbFunc } from "./dbaseconnect";
const app = express();

dbFunc();
// app.use(checkVerif() => {
// if( true ) {
//  next()
// } else if (false) {
//  res.sendStatus(400) + message = "bad auth"
// }
// })

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

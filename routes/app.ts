import express from "express";
import { Request, Response } from "express";
import { loginFunc } from "./auth/login";
import { sequelize } from "./models/dbaseconnect";
import bodyParser from "body-parser";
import { checkAccessToken } from "./controller/checkAccessToken";
import { regFunc } from "./auth/reg";
import fs from "fs";
import { Parse } from "./parse/parse";

const app = express();

import cors from "cors";

app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("hello world");
  res.end();

});
app.post("/auth", (req: Request, res: Response) => {
  loginFunc(req, res);
});
app.post("/reg", (req: Request, res: Response) => {
  regFunc(req, res);
});

app.get("/parse", async (req: Request, res: Response) => {
  let data = await Parse("data")
  res.send(data)
});

app.listen(80);

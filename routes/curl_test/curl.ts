import axios from "axios";
import { Response, Request } from "express";
import cheerio from "cheerio";

export const yandexSearch = (req: Request, res: Response) => {
  let data = axios
    .get(
      "https://yandex.ru/search/?lr=35&text=%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"
    )
    .then((data) => {
      res.send(data.data)
    });
};

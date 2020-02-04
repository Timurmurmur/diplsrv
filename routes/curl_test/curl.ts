import axios from "axios";
import { Response, Request } from "express";
import cheerio from "cheerio";
import { cachedDataVersionTag } from "v8";

const pushToDb = (links: any) => {
  console.log(links);

}


export const yandexSearch = (req: Request, res: Response, word: string) => {
  let data = axios
    .get(
      `https://habr.com/ru/search/?q=${word}#h`
    )
    .then((data) => {
      var $ = cheerio.load(data.data);
      var links: any[] = []
      $('.post__title_link').each(function (i, elem) {
        links.push($(elem).attr('href'));
      });
      pushToDb(links);
    });
};
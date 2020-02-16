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
      `https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=10&hl=ru&source=gcsc&gss=.com&cselibv=8b2252448421acb3&cx=partner-pub-9189593931769509:9105321070&q=ethernet&safe=off&cse_tok=AKaTTZi5PBzsMnY5xtgJFR3Tjohe:1581885079592&exp=csqr,cc&oq=html&gs_l=partner-generic.12...0.0.1.5267.0.0.0.0.0.0.0.0..0.0.gsnos%2Cn%3D13...0.2661j4090661j3....34.partner-generic..2.6.563.BA26FYwNT-Y&callback=google.search.cse.api13679`
    )
    .then((data) => {
      var $ = cheerio.load(data.data);
      var links: any[] = []
      // $('.post__title_link').each(function (i, elem) {
      //   links.push($(elem).attr('href'));
      // });
      res.send(data.data)
    });
};
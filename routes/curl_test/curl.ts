import axios from "axios";
import { Response, Request } from "express";
import cheerio from "cheerio";
import { cachedDataVersionTag } from "v8";
import { type } from "os";


const pushToDb = (links: any) => {
  console.log(links);
}


export const yandexSearch = (req: Request, res: Response, word: string) => {
  let data = axios
    .get(
      `https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=10&hl=ru&source=gcsc&gss=.com&cselibv=8b2252448421acb3&cx=partner-pub-9189593931769509:9105321070&q=ethernet&safe=off&cse_tok=AKaTTZi5PBzsMnY5xtgJFR3Tjohe:1581885079592&exp=csqr,cc&oq=html&gs_l=partner-generic.12...0.0.1.5267.0.0.0.0.0.0.0.0..0.0.gsnos%2Cn%3D13...0.2661j4090661j3....34.partner-generic..2.6.563.BA26FYwNT-Y&callback=google.search.cse.api13679`
    )
    .then((data) => {
      // const txt = data.data;
      // txt.splice(0,34);
      // txt.splice(txt.length-2,2);
      let txt = ((data.data.slice(35,data.data.length-2)));
      const json = JSON.parse(txt);

      json.results.forEach((el: any) => {
        console.log(el.clicktrackUrl)
      })
      res.send(txt);
    });
};
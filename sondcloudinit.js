import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import request from 'request-promise';
import {
    createReadStream,
    createWriteStream,
    readFile
} from 'fs';
import fs from 'fs';

const options = {
    uri: 'https://soundcloud.com/shadow-858061445/wh1mdwsucqmi',
    headless: true,
    setViewport: {
        width: 1240,
        height: 680,
    },
    transform: body => cheerio.load(body),
};
const snifTraffic = req => {
    if (req._url.search('https://cf-hls-media.sndcdn.com/playlist') === 0) {
        return true;
    }
};
const getTrackParts = async url => {
    console.log(url);
    const trackPartsFile = createWriteStream('parts.txt');
    const parts = await request(url).pipe(
        trackPartsFile.on('close', () => {
            downLoadTrackParts();
        }),
    );
};
const downLoadTrackParts = async () => {
    let audioPathArray;
    fs.readFile('parts.txt', 'utf8', function (err, data) {
        data.split('\n').forEach(async (el, index) => {
            if (el.search(/https/) === 0) {
                let currentAudioPath = `downloaded/music-part${index}.mp3`;
                audioPathArray = [...currentAudioPath];
                let file = await createWriteStream(currentAudioPath);
                await request({
                    uri: el,
                    headers: {
                        'Accept-Encoding': 'gzip, deflate ,br',
                    },
                }).pipe(file);
            }
        });
    });
};
const initalFunction = async options => {
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.setViewport(options.setViewport);
    const link = page
        .waitForResponse(snifTraffic)
        .then(res => getTrackParts(res._url));
    await page.goto(options.uri);
    let content = await page.content();
    await page.click('.sc-button-play.playButton.sc-button.m-stretch');
};

initalFunction(options);
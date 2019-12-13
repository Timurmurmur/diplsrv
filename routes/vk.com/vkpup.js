import puppeteer from 'puppeteer';
import {
  getNames
} from './getImNames';
import {
  login
} from './login';

export const createPup = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await login(page);
  await getNames(page);
  browser.close();
}
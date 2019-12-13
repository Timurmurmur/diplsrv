const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
/* GET home page. */
router.get("/", async (req, res, next) => {
  const names = await getVkPeople();
  console.log(names);
});
const getVkPeople = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  await login(page);
  const Names = await getNames(page);
  browser.close();
  return Names;
};

const login = async page => {
  const login = "login";
  const password = "pass";
  const LOGIN_SELECTOR = "#index_email";
  const PASS_SELECTOR = "#index_pass";
  const CONFIRM_SELECTOR = "#index_login_button";
  await page.goto("https://vk.com");
  await page.click(LOGIN_SELECTOR);
  await page.keyboard.type(login);
  await page.click(PASS_SELECTOR);
  await page.keyboard.type(password);
  await page.click(CONFIRM_SELECTOR);
  await page.waitForNavigation();
};

const getNames = async page => {
  await page.goto("https://vk.com/im", {
    waitUntil: "domcontentloaded"
  });

  const content = await page.content();
  let $ = cheerio.load(content);
  // tslint:disable-next-line: one-variable-per-declaration
  let body = $(".nim-dialog--name-w");
  let names = [];
  return body.find("._im_dialog_link").map(function(index) {
    return (names[index] = {
      name: $(this)
        .eq(0)
        .text()
    });
  });
};
module.exports = router;

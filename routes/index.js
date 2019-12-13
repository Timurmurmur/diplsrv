const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
import {
  getNames,
  getVkPeople,
  login
} from './pupeteer/pupeteer';
/* GET home page. */
router.get("/", async (req, res, next) => {
  const names = await getVkPeople();
  console.log(names);
});

module.exports = router;
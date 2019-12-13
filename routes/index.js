const express = require("express");
const router = express.Router();
const getVkPeople = require('./pupeteer/pupeteer');

/* GET home page. */
router.get("/", async (req, res, next) => {
  const names = await getVkPeople();
  console.log(names);
});

module.exports = router;
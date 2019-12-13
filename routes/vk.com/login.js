import { Page } from "puppeteer";

export const login = async page => {
  const login = "+79780740384";
  const password = "952169679yfhenj";
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

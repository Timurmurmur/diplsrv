import cheerio from 'cheerio';

export const getNames = async page => {
  await page.goto('https://vk.com/im', {
    waitUntil: 'domcontentloaded',
  });

  const content = await page.content();
  let $ = cheerio.load(content);
  // tslint:disable-next-line: one-variable-per-declaration
  let body = $('.nim-dialog--name-w')
  let names = []
  body.find('._im_dialog_link').map(function (index) {
    names[index] = {
      name: $(this)
        .eq(0)
        .text()
    }
  });

  console.log(names);

};
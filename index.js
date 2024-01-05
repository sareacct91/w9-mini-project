const { writeFile } = require('fs');

const getUserInput = require('./assets/script/userInput');

const htmlTemplate = require('./assets/script/htmlString');

(async () => {
  writeFile(
    './generated/index.html',
    htmlTemplate(await getUserInput()),
    err => err ? console.log(err) : console.log('HTML file created')
  );
})();
const franc = require('franc');
const langs = require('langs');

// grab the argument from the command line
let entryText = process.argv[2]

let languageCode = franc(entryText);

if (languageCode === 'und') {
  console.log('could not match a language try a larger text')
}
else {
  let languageName = langs.where("3", languageCode);
  console.log(languageCode)
  console.log(`that language is ${languageName}`)
}
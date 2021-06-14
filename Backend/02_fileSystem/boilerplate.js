const fs = require('fs');

// if the first it's false the value will be the second
let folderName = process.argv[2] || 'Project';

try{
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`,'');
  fs.writeFileSync(`${folderName}/app.js`,'');
  fs.writeFileSync(`${folderName}/style.css`,'');
}
catch (err){
  console.log('something went wrong', err);
}
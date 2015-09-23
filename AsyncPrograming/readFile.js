var fs = require('fs');

fs.readFile(__filename, {encoding: 'utf8'}, gotFileContents);

function gotFileContents(err, result) {
  if(err) {
    return console.error(err);
  }

  console.log(result);
}

var fs = require('fs');
var path = require('path');
var Promise = require('promise');

var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'target.js');

var fs_mkdir = Promise.denodeify(fs.mkdir);
var fs_readFile = Promise.denodeify(fs.readFile);
var fs_writeFile = Promise.denodeify(fs.writeFile);

function openFile() {
  return fs_readFile(source, {encoding: 'utf8'});
}

function writeFile(content) {
  return fs_writeFile(target, content);
}

function handleError(err) {
  console.error(err);
}

fs_mkdir(dir)
  .then(openFile)
  .then(writeFile)
  .then(function(){
    console.log('All done');
  })
  .catch(handleError);

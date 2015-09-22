var fs = require('fs');
var path = require('path');
var Promise = require('promise');

var dir = path.join(__dirname, 'temp');
var source = __filename;

var fs_mkdir = Promise.denodeify(fs.mkdir);
var fs_readFile = Promise.denodeify(fs.readFile);
var fs_writeFile = Promise.denodeify(fs.writeFile);

fs_mkdir(dir)
  .then(function() {
    return Promise.all([
      writeFile(__filename, target(0)),
      writeFile(__filename, target(1)),
      writeFile(__filename, target(2)),
      writeFile(__filename, target(3)),
      writeFile(__filename, target(4)),
      writeFile(__filename, target(5)),
      writeFile(__filename, target(6)),
      writeFile(__filename, target(7))
    ]);
  })
  .then(function() {
    console.log('complete');
  });

function target(i) {
  return path.join(dir, 'target_' + i + '.js')
}

function writeFile(source, target) {
  console.log("Writing %s", target);
  return fs_readFile(source, {encoding: 'utf8'})
    .then(function(content) {
      return fs_writeFile(target, content);
    })
}

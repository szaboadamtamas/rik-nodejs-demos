var Writable = require('stream').Writable,
    util = require('util');

var WriteStream = function() {
  Writable.call(this, {objectMode: true});
};

util.inherits(WriteStream, Writable);

WriteStream.prototype._write = function(chunk, encoding, callback) {
  console.log('write: ' + JSON.stringify(chunk));
  console.log('waiting 2 seconds');
  setTimeout(function() {
    console.log('finished waiting');
    callback();
  }, 2000);
};

module.exports = WriteStream;

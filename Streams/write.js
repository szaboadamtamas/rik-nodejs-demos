var ReadStream = require('./lib/readStream.js');
var WriteStream = require('./lib/writeStream_v2.js');

var rs = new ReadStream();
var ws = new WriteStream();

rs.pipe(ws);
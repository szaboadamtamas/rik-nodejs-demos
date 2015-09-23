var ReadStream = require('./lib/readStream.js');

var stream = new ReadStream();
stream.on('data', function(record) {
  console.log('received: ' + JSON.stringify(record));
  console.log('pause stream for 2 seconds');
  stream.pause();
  setTimeout(function() {
    console.log('resume stream');
    stream.resume();
  }, 2000);
});
stream.on('end', function(){
  console.log('done');
});
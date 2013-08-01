var fs = require('fs');
var http = require('http');
var browserify = require('browserify');

var port = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : 8005;

http.createServer(function (req, res) {
  if (req.url == '/bundle.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    browserify(__dirname + '/test.js')
      .bundle()
      .pipe(res);
    return;
  }
  
  if (req.url == '/cat.png') {
    fs.createReadStream(__dirname + '/cat.png').pipe(res);
    return;
  }

  res.end('<script src="/bundle.js"></script>');
}).listen(port, function () {
  console.log('open http://localhost:%s/', port);
});

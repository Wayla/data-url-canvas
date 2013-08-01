var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
  if (req.url == '/cat.png') {
    fs.createReadStream(__dirname + '/cat.png').pipe(res);
  } else {
    res.end('oops');
  }
}).listen(parseInt(process.env.PORT));

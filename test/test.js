var data = require('..');
var test = require('tape');
var resolve = require('url').resolve;

test('data-url-canvas', function (t) {
  urlToDataUrl(resolve(location.href, '/cat.png'), function (url) {
    data.toCanvas(url, function (canvas) {
      t.equal(url, data.fromCanvas(canvas));
      t.end();
    });
  });
});

function urlToDataUrl (url, fn)  {
  var img = new Image();
  img.onload = function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var url = canvas.toDataURL();
    fn(url);
  };
  img.src = url;
}

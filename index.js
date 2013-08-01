var data = {};

module.exports = data;

data.fromCanvas = function (canvas) {
  return canvas.toDataURL();
}

data.toCanvas = function (url, fn) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.ctx = ctx;

  var img = new Image();
  img.src = url;
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    fn(canvas);
  };
}

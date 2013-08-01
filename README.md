
# data-url-canvas

Convert data urls to canvas and vice versa.

[![testling badge](https://ci.testling.com/Wayla/data-url-canvas.png)](https://ci.testling.com/Wayla/data-url-canvas)

## Usage

```js
var data = require('data-url-canvas');
var canvas = document.getElementById('canvas');

var url = data.fromCanvas(canvas);

data.toCanvas(url, function (canvas) {
  // canvas will have the same data
});
```

## API

### data.fromCanvas(canvas)

Get a data url from the given `canvas`.

### data.toCanvas(url, fn)

Create a canvas from the given data `url` and call `fn` with it.

## Installation

With [npm](https://npmjs.org) do:

```
npm install modp-groups
```

Then bundle for the browser with
[browserify](https://github.com/substack/node-browserify).

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

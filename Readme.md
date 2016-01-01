> Check if a JavaScript environment has a DOM (Document Object Model)


## Install

```
$ git clone https://github.com/vikramcse/check-dom.git
$ cd check-dom
$ npm install --save .
```


## Usage

```js
var checkDOM = require('check-dom');

// In Node.js
checkDOM();
//=> false

// In the browser
checkDOM();
//=> true
```
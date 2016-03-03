> Check if a JavaScript environment has a DOM (Document Object Model)


## Install

```sh
$ npm install --save check-dom
```

## Example

```js
var checkDOM = require('check-dom');

// In Node.js
checkDOM();
//=> false

// In the browser
checkDOM();
//=> true
```

#### `require('check-dom')`

**Returns**: Returns true if the environment has DOM

## License

&copy; 2016 vikram. MIT License

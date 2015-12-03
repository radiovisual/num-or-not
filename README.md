# num-or-not
> Check for a valid Number value.

Numbers, and values that can be cast or evaluated to numbers will return `true`.

All other values will return `false`.

## Installation

```
$ npm install --save num-or-not
```

## Usage

```js
const isNumber = require('num-or-not');

// Integers
isNumber(5);            // => true
isNumber(-5);           // => true
isNumber('5');          // => true
isNumber('-5');         // => true

// Floats (Decimal & Comma)
isNumber(5.0);          // => true
isNumber('5.0');        // => true
isNumber('5,0');        // => true

// Octal
isNumber(0o144);        // => true
isNumber('0o144');      // => true

// Hexadecimal
isNumber(0xFF);         // => true    
isNumber('0xFF');       // => true

// Exponential
isNumber(6e3);          // => true
isNumber(12e-2);        // => true
isNumber('6e3');        // => true
isNumber('12e-2');      // => true

// "Evaluates to Int" values
isNumber(+'');          // => true
isNumber(+[]);          // => true
isNumber(+[0]);         // => true
isNumber(+true);        // => true
isNumber(+new Date);    // => true
```

## Why?

Why do we need another open source number validator in Javascript? **We don't**, but I wanted one to help keep me accountable of the data type nuances in JS.
 
## License

MIT @ [Michael Wuergler](http://numetriclabs.com/)
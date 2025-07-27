// importDemo.js

// This file demonstrates how to import the mathOperations.js module
// using both CommonJS and ES6 module syntax.

// mathOperations.js currently uses CommonJS exports:
// module.exports = { add, subtract }

// CommonJS import using require:
const mathOperationsCommonJS = require('./mathOperations');
console.log('CommonJS import:');
console.log('Add:', mathOperationsCommonJS.add(2, 3)); // 5
console.log('Subtract:', mathOperationsCommonJS.subtract(5, 2)); // 3

// If mathOperations.js used ES6 module exports like:
// export function add(a, b) { return a + b; }
// export function subtract(a, b) { return a - b; }

// Then you could import using ES6 import syntax:
// import { add, subtract } from './mathOperations.js';
// console.log('ES6 import:');
// console.log('Add:', add(2, 3));
// console.log('Subtract:', subtract(5, 2));

// Note: To use ES6 import/export in Node.js, you need to set "type": "module" in package.json
// or use .mjs file extensions.

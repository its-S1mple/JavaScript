// exportDefaultDemo.js

// This file demonstrates how to use default exports and imports
// in both CommonJS and ES6 module systems.

// CommonJS default export example:
// In a CommonJS module, you can export a single value as the default by assigning it to module.exports directly.

// mathOperationsDefault.js (example):
// function multiply(a, b) {
//     return a * b;
// }
// module.exports = multiply;

// Importing the default export in CommonJS:
const multiply = require('./mathOperationsDefault'); // assuming mathOperationsDefault.js exists
console.log('CommonJS default export:');
console.log('Multiply:', multiply(3, 4)); // 12

// ES6 default export example:
// In ES6 modules, you can export a default value using the 'export default' syntax.

// mathOperationsDefaultES6.js (example):
// export default function multiply(a, b) {
//     return a * b;
// }

// Importing the default export in ES6:
// import multiply from './mathOperationsDefaultES6.js';
// console.log('ES6 default export:');
// console.log('Multiply:', multiply(3, 4));

// Note: To use ES6 import/export in Node.js, set "type": "module" in package.json or use .mjs extensions.

// Summary:
// - CommonJS default export: module.exports = value;
// - ES6 default export: export default value;
// - Importing default export differs slightly between CommonJS (require) and ES6 (import).

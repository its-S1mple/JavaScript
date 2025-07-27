const mathOperations = require('./mathOperations');

// mathOperations.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
module.exports = multiply;

module.exports = {
    add,
    subtract
};


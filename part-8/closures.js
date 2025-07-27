//closures in js
// closures are group/bundle of functions that have access to the outer function's scope even after the outer function has returned
// they are used to create private variables and functions that can be accessed only by the closure
// they are used to create functions that can be used as callbacks or event handlers

function outerFunction() {
    let outerVariable = "I am from outer function";
    let counter = 0;

    function innerFunction() {
        console.log(outerVariable);
        counter++;
        console.log("Counter incremented to:", counter);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();
closureFunction();
closureFunction();
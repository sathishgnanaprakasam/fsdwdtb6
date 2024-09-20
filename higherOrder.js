/*
    callback function: a function that is passed as an argument to another function.

    Higher order function: a function that accepts a function as an argument or returns a function.
*/

function calc(num1, num2) {
    return add(num1, num2);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(calc(2, 3)); // 5
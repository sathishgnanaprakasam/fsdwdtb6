let numbers = [1, 4, 9, 16];

// Objective: [2, 8, 18, 32]

// Traditional Approach
// for (let index = 0; index < numbers.length; index++) {
//     numbers[index] = numbers[index] * 2;
// }

// using map method
// const squarer = (value, index, array) => {
//     return value * 2;
// }

// console.log(numbers.map(squarer));

// One liner map method
console.log(numbers.map(value => value * 2));

// console.log(numbers);
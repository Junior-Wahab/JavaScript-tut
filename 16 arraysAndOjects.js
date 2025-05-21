// arrays special type of object that stores multiple values
// Array literals
let numbers = [1, 2, 3, 4, 5, 6];
let x;
x = numbers.length;

// Array constructor
const fruits = new Array('apple', 'grapes', 'orange');
fruits[2] = 'pear';

console.log(numbers);
console.log(`My favorite fruit is ${fruits[2]}`);

const mixed = [true, 2, null, 'pineapple'];

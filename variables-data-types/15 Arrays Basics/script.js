// An array is an ordered collection of data

// values in arrays are called elements( e.g. 1, joe etc) .
// arrarys are 0 based

let x;

// Array literal
const num = [1, 2, 3, 4, 5];
const mixed = [12, "Hello", true, null];
// Array constructor
const fruits = new Array("apple", "grapes", "orange");

// access specific element by its index
x = num[0];
x = `My favourite fruit is ${fruits[2]}`;

// Know how many items are in an array
x = num.length;

// change grapes to pear
fruits[1] = "pear";

// Array methods
// add to the end of an array
fruits[fruits.length] = "Blueberry";

console.log(num);
console.log(fruits);
console.log(x);

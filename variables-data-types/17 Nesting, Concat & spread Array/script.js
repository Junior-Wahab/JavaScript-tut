// Nested arrarys
let x;
const fruits = ["apple", "pear", "orange"];
const vegetables = ["Tomatoe", "Celtuce", "Broccoli"];

fruits.push(vegetables);
x = fruits[3][0];

let y;
const fruitsVeg = [fruits, vegetables];

y = fruitsVeg[1][1];

console.log(fruits);
console.log(x);
console.log(y);

// Array concartination: taking items from one array and adding to a different array
let z;
const fruit = ["apple", "pear", "orange"];
const vegetable = ["Tomatoe", "Celtuce", "Broccoli"];
z = fruit.concat(vegetable);
// OR
// Spread operator (...)
z = [...fruit, ...vegetable];
console.log(z);

// Flatten array
let b;
let arr = [1, 2, 3, 4, [5, 6, 7], [8]];
b = arr.flat();

console.log(b);

// Static methods on array objects
// Array.isArray: check if its an array
let a;
let num = [1, 2, 3, 4, 5, 6, 7];
a = Array.isArray(num);
a = Array.from("1234");
a = Array.of("1234");

console.log(a);

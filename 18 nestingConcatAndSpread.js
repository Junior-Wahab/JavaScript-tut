let fruits = ['apple', 'pear', 'orange'];
let berries = ['strawberry', 'blueberry', 'rasberry'];
let x;
// nest an array
fruits.push(berries);

x = fruits[3][1];

const allFruits = [fruits, berries];
x = allFruits[1][0];

x = fruits.concat(berries);

// spead operator(...)
x = [...fruits, berries];

console.log(fruits);
console.log(x);

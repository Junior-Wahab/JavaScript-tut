const arr = [1, 2, 3, 4, 5];

// put a value at the end of an array
arr.push(6);

// remove a value at the end of an array
arr.pop();

// add a value at the beginning of an array
arr.unshift(0);

// remove a value at the beginning of an array
arr.shift();

// reverse an array
// arr.reverse();

// Get a value from an array
let x;

// returns true if a value is in an array
x = arr.includes(3);

// give you the index of a specific value in an array
x = arr.indexOf(2);

// slice returns selected elements in an array as a new
x = arr.slice(1, 4);

// Splice modifies the original array by removing, replacing, or adding elements.
// x = arr.splice(1, 4);

// chain methods
// x = arr.slice(1, 4).reverse();

console.log(arr);
console.log(x);

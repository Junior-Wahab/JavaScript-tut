let x;
const arr = [1, 2, 3, 4, 5];

x = arr.push(6, 0);
x = arr.sort((a, b) => b - a);
console.log(arr);
console.log(x);

// Combine array into one array while removing duplicates
let y;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

y = [...new Set([...arr1, ...arr2])];
console.log(y);
// OR
let arr3;
arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);
console.log(arr3);

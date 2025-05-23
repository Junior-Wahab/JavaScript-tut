let x;
const arr = [1, 2, 3, 4, 5];

x = arr.unshift(0);
x = arr.push(6);
x = arr.reverse();
console.log(x);

let y;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

y = arr1.pop(5);
// y = arr1.concat(arr2);
y = [...arr1, ...arr2];

console.log(y);

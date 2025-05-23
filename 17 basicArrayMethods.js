let arr = [1, 2, 3, 4, 5, 6, 7];
// add to the end of an array
arr.push(8);
// remove from the end of array
arr.pop();
// add to the begining of an array
arr.unshift(0);
// remove at the begining of an array
arr.shift(0);
// reverse the array [7,6,5,4,3,2,1]
arr.reverse();

// Check whether a specific value is an array
let x;
x = arr.includes(5);
// Gives you the index of an array
x = arr.indexOf(4);

// return selectd elemnent in an array
x = arr.slice(1, 4);

// return selectd elemnent in an array(it changes the original array)
x = arr.splice(1, 4);

console.log(arr);
console.log(x);

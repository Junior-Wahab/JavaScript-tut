// Arrow function
function add(a, b) {
  return a + b;
}
console.log(1, 2);

const addSign = (a, b) => {
  return a + b;
};
console.log(addSign);

// shorten or implicit return
const subtractNum = (a, b) => a - b;
console.log(subtractNum(2, 1));

const double = a => a * 2;
console.log(double(8));

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

console.log(createObj());

const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (n) {
//     console.log(n)
// })

numbers.forEach(n => {
  console.log(n);
});

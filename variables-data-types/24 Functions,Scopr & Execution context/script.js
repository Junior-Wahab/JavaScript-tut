// A function is a block of code that performs a specific task

function sayHello() {
  console.log("Hello World");
}
sayHello();

// Function parameters are the names listed in the function definition.
// num 1 and num2 are parameters
function add(num1, num2) {
  console.log(num1 + num2);
}
// arguments are actual value that is passed into a function when it is called.
// 2 and 5 are arguments
add(2, 5);

function subtract(num1, num2) {
  return num1 - num2;
}
const result = subtract(6, 2);

console.log(result, subtract(20, 5));

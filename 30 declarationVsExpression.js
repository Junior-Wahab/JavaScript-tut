// Declaration
function add(value) {
  return `$ ${value}`;
}

console.log(add(100));

// function expression
const addPlusSign = function (value) {
  return `$ ${value}`;
};
console.log(addPlusSign(200));

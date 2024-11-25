// function decaration
// You can call a function decalartion ahead
function funcDecaration(value) {
  return "$" + value;
}
console.log(funcDecaration(50));

// function expression
const func = function (value) {
  return "+" + value;
};

console.log(func(20));

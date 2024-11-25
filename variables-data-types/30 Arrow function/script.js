const add = (a, b) => {
  console.log(a + b);
};
add(5, 5);

// Implecit return
const subtract = (a, b) => a - b;
console.log(subtract(6 - 4));

const double = (a) => a * 2;
console.log(double(10));

// Returning an object
const createObj = () => ({
  name: "Brad",
});

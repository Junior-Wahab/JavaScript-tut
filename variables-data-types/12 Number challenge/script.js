const x = Math.floor(Math.random() * 100) + 1;
const y = Math.floor(Math.random() * 50) + 1;
let sum, differnece, product, quotient, reminder;
sum = x + y;
differnece = x - y;
product = x * y;
quotient = x / y;
reminder = x % y;

console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} - ${y} = ${differnece}`);
console.log(`${x} * ${y} = ${product}`);
console.log(`${x} / ${y} = ${quotient}`);
console.log(`${x} % ${y} = ${reminder}`);

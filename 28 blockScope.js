const x = 100;

if (true) {
  const y = 100;
  console.log(x + y);
}
// Not work because x is in the global scope
// console.log(x + y);

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// only c works because var is not block scope
// console.log(a);
// console.log(b);
console.log(c);

function run() {
  var d = 100;
  console.log(d);
}
run();
// var is function scoped. you can't access a var in a function outside a function
// console.log(d);

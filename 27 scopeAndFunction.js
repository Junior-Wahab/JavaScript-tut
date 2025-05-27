// scope current area or context of a specific scope
// Types - global and local scope

const x = 100;
console.log(x, `in global`);

function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
  console.log(y);
}
add();

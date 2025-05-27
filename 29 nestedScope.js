// Nested scope
// You can acces parent variables but you can't access child variables
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

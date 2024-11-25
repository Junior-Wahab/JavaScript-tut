function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}

first();

if (true) {
  const x = 50;

  if (x === 50) {
    const y = 50;
    console.log(x + y);
  }
}

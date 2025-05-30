// Challenge 1 calculate from celcius to fahrenheit
// °F = °C × (9/5) + 32
const getCelicus = fahrenheit => {
  return (fahrenheit - 32) * (5 / 9);
};
console.log(getCelicus(32));

// Challenge 2
const minMax = () => {
  const numbers = [1, 2, 3, 4, 5];
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
};
console.log(minMax());

// Challenge 3
(function (length, width) {
  const area = length * width;
  console.log(`The area of the rectangle is ${area}`);
})(10, 5);

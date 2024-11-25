function getCelsius(f) {
  const celsius = ((f - 12) * 5) / 9;
  return celsius;
}
console.log(getCelsius(100));

const minMax = (arr) => {
  const maximum = Math.max(...arr);
  const minimum = Math.min(...arr);

  return {
    min: minimum,
    max: maximum,
  };
};
console.log(minMax([1, 2, 3, 4, 5]));

(function (length, width) {
  const area = length * width;
  console.log(area);
})(10, 5);

// Defaut parameters
function regUser(user = "John") {
  return user + " is registered";
}
console.log(regUser);

// Rest parameters
function sum(...numbers) {
  return numbers;
}
// it puts all in an array
console.log(sum(1, 2, 3));

function sum1(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}
// it adds all the numbers together
console.log(sum1(1, 2, 3));

// Object as prems
function loggedUser(user) {
  return `The user ${user.name} with id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "John",
};
console.log(loggedUser(user));

// Array as prams
function randomNumbers(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}
// Generate random numbers
randomNumbers([1, 2, 3, 4, 5, 6]);

// OR

function randomNumbers1(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}
// Generate random numbers
randomNumbers1(1, 2, 3, 4, 5, 6);

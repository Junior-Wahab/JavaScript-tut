// Default params
function registerUser(user = 'John') {
  return `${user} is  refistered}`;
}

console.log(registerUser());

// Rest params
function sum(...numbers) {
  total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4));

// Objects as params
function loginUser() {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));

// arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5]);
// or
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom(1, 2, 3, 4, 5);

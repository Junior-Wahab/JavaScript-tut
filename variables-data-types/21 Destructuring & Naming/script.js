const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};
console.log(person);
// OR if they are the same
const person1 = {
  firstName,
  lastName,
  age,
};
console.log(person1.age);

// Destructuring  a technique that allows you to unpack values from arrays or objects into separate variables.
const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const {
  id,
  title,
  user: { name },
} = todo;
console.log(id, title, user);

// Rename properties or keys
const todo1 = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const { id: todoId } = todo1;

console.log(todoId);

//  Destructuring arrays
const numbers = [1, 2, 3, 4, 5, 6];

// rest operator (...) allows a function to accept an indefinite number of arguments as an array
const [first, second, ...rest] = numbers;

console.log(first, second, rest);

const firstName = 'John';
const lastName = 'Doe';
const age = 20;

// both work
const person = {
  firstName,
  lastName: lastName,
  lastage: age,
};

// Destructuring
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'john',
  },
};

const {
  id,
  user: { name },
} = todo;

console.log(id, name);

// Destructing arrays
const number = [23, 67, 33, 49];
const [first, second, ...rest] = number;
console.log(first, second, rest);

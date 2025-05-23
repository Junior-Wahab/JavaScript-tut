const todo = {};

// object constructor
const todo1 = new Object();
todo1.id = 1;

console.log(todo1);

let x;
const person = {
  address: {
    coords: {
      lat: 42.2333,
      lng: 42.2333,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 3 };
// spread operator
const obj3 = { ...obj1, ...obj2 };
// Or
const obj4 = Object.assign({}, obj1, obj2);

x = obj3;

const todos = [
  { id: 1, name: 'Buy milk' },
  { id: 2, name: 'pick up kids from school' },
  { id: 3, name: 'Take out fresh' },
];

x = todos[0].name;

console.log(x);

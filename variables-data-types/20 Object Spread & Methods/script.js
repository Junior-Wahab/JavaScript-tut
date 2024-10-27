let x;
// another way of creating an object
const todo = {};
todo.id = 1;
todo.name = "John";
todo.isAdmin = true;

x = todo;

// OR

const todo1 = new Object();
todo1.name = "John";

// nesting
const person = {
  address: {
    coords: {
      lat: "42.4",
      lng: "22.4",
    },
  },
};

x = person.address.coords.lat;

// Spread operator allows us to quickly copy all or part of an existing array or object into another array or object.
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = {
  ...obj1,
  ...obj2,
};

x = obj3;

// Oject Method
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

// aarays of obects
const todo2 = [
  { id: 1, name: "Jon" },
  { id: 2, name: "Junior" },
  { id: 3, name: "Peter" },
];
x = todo2[1].name;

// Object.keys() method returns an array with the keys of an object.
x = Object.keys(todo);

x = Object.keys(todo).length;

// Get an array with all the values
x = Object.values(todo);

// Get an array of key value pairs
x = Object.entries(todo);

// checking if an object has a specific property
x = todo.hasOwnProperty("name");

x = console.log(x);

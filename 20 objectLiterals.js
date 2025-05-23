// A common data structure that holds key/value/value pairs
// object literals
let x;
const person = {
  name: 'John Doe',
  age: 27,
  isAdmin: true,
  address: {
    city: 'Accra',
    state: 'MA',
  },
  hobbies: ['music'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person;

// Not recommended
const person2 = {
  'first name': 'Brad',
  'Last name': 'Doe',
};

x = person2['Last name'];

person.name = 'Jane DOe';
console.log(person);
console.log(x);

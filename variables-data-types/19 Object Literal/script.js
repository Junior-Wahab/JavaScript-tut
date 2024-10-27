// A common data structure that holds key/value pairs
let x;
const person = {
  name: "Joe",
  age: 32,
  isAdmin: true,
  address: {
    street: "123 main st",
    city: "Accra",
  },
  //   array
  hobbies: ["sports", "music"],
};
x = person.name;
x = person.address.street;
x = person.hobbies[0];

// update properties
person.name = "John Doe";
// add property
person.hasChilcdren = true;
// remove a property
delete person.age;

// function as a property
person.greet = function () {
  console.log(`Hello World`);
};

const person2 = {
  "first name": "James",
  "last name": "Doe",
};
x = person2["first name"];

person.greet();
console.log(x);

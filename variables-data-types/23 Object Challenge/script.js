const library = [
  {
    title: "Hello World",
    author: "Junior Wahab",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "How are you",
    author: "Bernard Asare",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;

const { title: firstBook } = library[0];

const libraryJSON = JSON.stringify(library);

console.log(library);
console.log(firstBook);
console.log(libraryJSON);

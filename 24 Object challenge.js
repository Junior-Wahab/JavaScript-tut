const library = [
  {
    title: 'Brain Damage',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: 'The Lost Child',
    author: 'Juan Guy',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: 'Kelvin Chris',
    author: 'Love Dean',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title, firstBook } = library[0];

console.log(title);

const libraryJson = JSON.stringify(library);
console.log(libraryJson);

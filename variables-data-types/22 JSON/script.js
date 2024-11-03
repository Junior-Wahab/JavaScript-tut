// Javascript Object Notation

const post = {
  id: 1,
  title: "Post one",
  body: "This is the body",
};
// convert object to json string
const str = JSON.stringify(post);
// store things on yur client (browser)

// Paarse JSON
const obj = JSON.parse(post);
console.log(str, obj);

// Array of objects
const posts = [
  {
    id: 1,
    title: "Post one",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post one",
    body: "This is the body",
  },
];
const str2 = JSON.stringify(posts);

console.log(str2);

// Global variables can be accessed from anywhere in a JavaScript program
// Any variable that you declare inside a function

// Global example
const x = 100;

// local example
function add() {
  const y = 100;
  console.log(x + y);
}
add();

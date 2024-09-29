/**
 Type convention is the process of explicitly(exact) convenrting a value from one type to another
 */

let amount = "100";
// change string to number
//  first way
amount = parseInt(amount);
//second way
amount = +amount;
// third way
amount = Number(amount);

// change number to a string
let num = 100;
num = num.toString();
num = String(num);

// change string to float or decimal
let number = "99.5";
number = parseFloat(number);

// convert number to boolean
let truthy = 100;
truthy = Boolean(truthy);

// set it to 0 you will get false because 0 is a falsey value
le;
let falsey = 0;
falsey = Boolean(falsey);

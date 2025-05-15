// ways to comment a variable
// var, let, const(constant)

let firstName = 'Junior'
let lastName = 'Xabi'
console.log(firstName, lastName)

// Naming convertions
// only letters, numbers, underscore and dollar signs
// Can't start with a number
let name1 = 'Junior'
// let 1name = "Junior" dont

// reasign variables
let age = 30
age = 40
console.log(age)

// - can't reasign with const
// const age1 = 10
// age1 = 20
// console.log(age1)

// can't declare and not intialized
// const score;

// cant reasign with an array
// const arr = [1, 2, 3, 4]
// arr = [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)

const person = {
  name: 'Brad',
}
person.name = 'John'
console.log(person)

// Declare multiple values
let a, b, c
a = 5
b = 10
c = 20
console.log(a, b, c)

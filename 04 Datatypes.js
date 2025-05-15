// Primitive Data Types and Objects(refrence)
/*
string - sequence of characters, Must be in quotes or backticks
number - integers as well as flating-point numbers
Boolena - logical entity / ture or flase
Null - lntentional absence of any object value
Undefined - A variable that has not been defined / assigned
symbol - built in object whose construtor returns a unique symbol
Bigint - numbers that are greater tham the number type to handle
*/

// Objects(refrence)
// examples array,object, function
// an object is like that box. It's a way to store a collection of properties

// Static typing and dynamic types
// Javascript is a dynamically-typed language. This means, we do not explicity define the types for our variables.
// TypeScript is a superset of javascript, whcih allows static-typing. This can make your code more verbose and less prone to error.

// string
const firstName = 'Joe'
console.log(firstName, typeof Joe)

// number
const age = 18
console.log(age, typeof age)

// boolean
const hasKids = true
console.log(hasKids, typeof hasKids)

// null
const hasApartmentNum = null
console.log(hasApartmentNum, typeof hasApartmentNum)

// undefined
let score
console.log(score, typeof score)

// undefined
let id = Symbol('id')
console.log(id, typeof id)

// bigint
let n = 33445543455332233n
console.log(n, typeof n)

// Objects(refrence)
// array, objects and function
const arr = [1, 2, 3, 3, 4]
console.log(arr, typeof arr)

const person = {
  name: 'John',
}
console.log(person, typeof person)

function sayHello() {
  console.log('Hello')
}
const results = sayHello
console.log(results, typeof results)

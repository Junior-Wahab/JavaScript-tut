// Data types
// Primitive types: stored directly in the "stack", where it is accessed from string, number, boolean, null, undefined, symbol, BigInt
// Refrence types: Stored in the heap and accessed by reference
//  arrays, function, objects

// stroed in stack
let name = 'John'
let age = 30

// stored in heap
// the varaible is on the stack but it access the data by reference and that data is stored in the heap
let person = {
  name: 'Brad',
  age: 40,
}

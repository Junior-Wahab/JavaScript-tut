// Type conversion process of converting a value from one type to another

let amount = '100'
// change string to number
// amount = parseInt(amount)
// amount = +amount
amount = Number(amount)

// change number to string
let amount1 = 100
// amount1 = amount1.toString()
amount1 = String(amount1)

// Change from strign to float or decimal
let amount2 = '99.5'
amount2 = parseFloat(amount2)

// convert number to boolean
let amount3 = 100
amount3 = Boolean(amount3)

console.log(amount, typeof amount)
console.log(amount1, typeof amount1)
console.log(amount2, typeof amount2)
console.log(amount3, typeof amount3)

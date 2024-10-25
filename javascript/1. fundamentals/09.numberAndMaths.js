const score = 200 // automatically number by the javascript
console.log(score)

// dedicatly define the data type
const balance = new Number(100)
console.log(balance)

// what is the difference between both ?
let balanceStr = balance.toString()
console.log(balanceStr)

// Bellow functions returns a string
console.log(balance.toFixed(2)) // precision value use when working on ecommerce application.

console.log(balance.toPrecision(7)) // dhyan se use karna he

// precision example // priority precision ko jyada milti he then decimal
let example1 = 20.893
console.log(example1.toPrecision(2))
console.log(example1.toPrecision(3))
console.log(example1.toPrecision(4))
console.log(example1.toPrecision(1))

const hundreds = 10000000
console.log(hundreds.toLocaleString()) // by default by US standard

console.log(hundreds.toLocaleString('en-IN'))

// min value and max value
// Number is a datatype so we get lots of properties associated with it.

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// maths in javascript
// maths library comes by default with the javascript

console.log(Math)

console.log(Math.PI, Math.LOG2E)

console.log(Math.abs(-5))
console.log(Math.pow(2, 3))
console.log(Math.round(4.6)) // 5 // normal round of values

// to control the round in your own way
console.log(Math.ceil(4.6)) // take ceil value
console.log(Math.floor(4.6)) // take floor value

// min max values
console.log(Math.min(1,352,62,345))
console.log(Math.max(1,352,62,345))

// math.random important library
console.log(Math.random()) // in between 0 and 1

// to get values between a and b

let value = (Math.random() * 10) + 1 // math.random can be 0 too hence adding 1
console.log(value)

const min = 10
const max = 20

value = min + ( Math.random() * (max - min + 1))
console.log(Math.floor(value))
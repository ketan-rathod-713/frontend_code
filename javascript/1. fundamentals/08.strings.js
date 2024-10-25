// strings in javascript

const name = "hitesh"
const repoCount = 20

// console.log(name + repoCount) // outdated syntax

// use backticks for string interpolation
 
console.log(`Hello ${name} and my repo count is ${repoCount}`) // modern way of string interpolation

// String is an object
// 0 is a key and it's value is H

const Something = new String("Hello")
console.log(Something)

console.log(Something[0])

console.log(Something.__proto__) // This is not empty, we can run thsi in browser to actually see it.

// jese length ko access kiya he vese hi all the methods of proto can be called directly by this syntax
console.log(Something.length)

console.log(Something.toLowerCase()) // no need to do Something.__proto__.toLowerCase() ha ha

let newStr = Something.substring(0, 2)
console.log(newStr)

let sliced = Something.slice(-1, 0) // we can also pass negative values in slice
console.log(sliced)

// trim and replace methods

const newStringOne = "    hii a something    "
console.log(newStringOne.trim())

let changedstr = newStringOne.replace("something", "wow this is changed")
console.log(changedstr)

let str = "This is the string"
let arr = str.split(" ")
console.log(arr)
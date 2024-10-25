
const myArr = [1, 2, 'good', true, 'something']

// value can be accessed by only index not by string

// can contain all types of element

// array is resizable

// 0 based indexing

// copy operation in javascript creates a shallow copy. it keeps the references.

// Different methods available in javascript

// array 2 prototype

// Array methods
myArr.push("value pushed")
myArr.push(20)
myArr.pop()
console.log(myArr) // myarray is now changed

// All array values needs to be shifted
myArr.unshift("append at start")
console.log(myArr)

// slice and splice
console.log("A ", myArr)

const myna1 = myArr.slice(1, 3)
console.log("After A", myArr)
console.log("B with slice", myna1)

// splice
const myna2 = myArr.splice(1, 3)
console.log("After A", myArr)
console.log("B with splice", myna2)

// so what is the difference between slice and splice
// splice original array ko manipulate karta he, returns the deleted values ha ha
// primitive datatypes
// call by value

// 7 datatypes
// string
// number
// boolean
// null
// undefined
// symbol
// big int

// Reference types
// no primitive

// Arrays and objects

// objects and browser events master then javscript done ha ha

// dynamically typed language or statically typed -> dynamic

let userEmail; // it will be undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

const bigNumber = 3451344444444444444415234513413n // appending n then it converted into bigint


// Array, Objects and Functions

const heroes = ["shaktiman", "something"]

const obj = {
    "name": "ketan",
    "age": 22
}

// we can store the function as a value in any variable in javascript
const myfunction = function(){
    console.log("Hello World")
}

console.log(typeof myfunction) // function // but actually it is called as object function

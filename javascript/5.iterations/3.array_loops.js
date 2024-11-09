// for of loop

const arr = [1, 2, 3, 4, 4]

for (const num of arr) {
    console.log(num)
}

const obj = {
    "name": "ketan rathod",
    "age": 20,
    "something": true
}

// object is not iterable ha ha error
// for (const key of obj) {
//     console.log(key)
// }

const greetings = "hello goodmorning"
for (const element of greetings) {
    console.log(element) // string is iterable hence ek ek character print hoga
}

// Maps in javascript

const map = new Map()
map.set("IN", "india")
map.set("US", "united states of america")

console.log(map)
console.log(map.get("GOOD"))
console.log(map.get("US"))

for (const key of map) {
    console.log(key) // pura array aa jata he
}

// we can easily destructure an array it returns

for (const [key, value] of map) {
    console.log(key, value)
}

// for i loop 

// works best for the objects
for (const key in obj) {
    console.log(key)
    console.log(obj[key])
}

// do forin loop works for the arrays ??

const programming = ["javascript", "something", "c++"]
for (const key in programming) {
    console.log(key)
}

// Hence forin me keys aati he

// map is also not iterable hence forin or forof will not work for this case.


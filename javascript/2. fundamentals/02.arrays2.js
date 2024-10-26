// lots of array methods

const arr1 = [1, 2, 3]
const arr2 = [6, 7, 8]

// arr1.push(arr2)

// console.log(arr1)

// console.log(arr1[3][1])

// to merge the arrays
let concatedArray = arr1.concat(arr2)
console.log(concatedArray, arr1)

// instead most of people use spread operator to do this job
const allArrays = [...arr1, ...arr2] // Most of the people use this way
console.log(allArrays)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray) // wow it's cool ha ha

// when we do data scrapping the data can be any formate

console.log(Array.isArray("Hitesh"))

// to convert to an array
console.log(Array.from("good"))
console.log(Array.from({name: "good"})) // TODO:interesting case for interview // empty arry

const score1 = 1
const score2 = 2
const score3 = 3

console.log(Array.of(score1, score2, score3)) // important
// why string to number converstions are confusing

let value = 4
let negValue = -value 
console.log(negValue)

// normal arithmatic operations /// Skipping...

console.log(2**4) // 2 power 4

let str1 = "hitesh"
let str2 = " hello"
console.log(str1 + str2) // concatination

console.log("1" + 2 ) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32

// detail specification is written on ecma script
console.log(+true) // increment to boolean converted it to number
console.log(+false)

console.log(+"") // converted to the number and thus it will output 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.table([num1, num2, num3])

let gameCounter = 100
gameCounter++
console.log(gameCounter)

console.log(++gameCounter)
console.log(gameCounter++)

// prefix and postfix operator
// checkout mdn documentation
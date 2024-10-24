let score = "464abc"

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber) // NAN not a number

// so we have to be carefull when converting string to the numbers
// as in javascript we won't be getting any errors beforehand

// if boolean then 1 or 0

// "44" to 44
// "55abc" to NaN // iska type number hi he
// true to 1 and false to 0; same vice versa.

var isLoggedIn = 1
var booleanIsLoggedIn = Boolean(isLoggedIn)
console.table([booleanIsLoggedIn, isLoggedIn])

var emptrystr = ""
var boolEmptystr = Boolean(emptrystr) // empty string will return false
console.log(emptrystr, boolEmptystr) 

// conversion to string

let someNumber = 44
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// investigation study is very important.
let mydate = new Date()
console.log(mydate)

console.log(mydate.toString()) // it is good little bit

console.log(mydate.toDateString()) // good

console.log(mydate.toLocaleDateString()) // 14/10/2024 good

console.log(mydate.getDate())

console.log(typeof mydate)

// to declare specific date

let newDate = new Date(2023, 1, 1) // month starts from 0 in javascript // year month date  
console.log(newDate.toDateString())

// timestamps in date
let myTimeStamp = Date.now()
console.log(myTimeStamp)

let millisecondDiff = myTimeStamp- mydate.getTime()
let numOfseconds = Math.round(millisecondDiff / 1000)
console.log(`number of seconds taken ${numOfseconds} and milliseconds ${millisecondDiff}`)

let anotherdate = mydate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
})

console.log(anotherdate)
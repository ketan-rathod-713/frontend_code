let a = 10
const b = 20
var c = 30

if (true){
    let a = 343
    const b = 2342
    var c = 23552
}

console.log(a)
console.log(b)
console.log(c) // it will be overwritten by the if block that is the problem

// TODO: Global scope is different in both node and windows of browser
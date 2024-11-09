const userEmail = "ketanrtd1@gmail.com"

function checkTruthyValue(value) {
    if (value) {
        console.log("truthy value")
    } else {
        console.log("falsy value")
    }
}

checkTruthyValue(userEmail) // true
checkTruthyValue("") // false
checkTruthyValue(0) // false
checkTruthyValue(1) // true
checkTruthyValue(true) // true
checkTruthyValue(false) // false
checkTruthyValue(NaN) // false
checkTruthyValue(null) // false
checkTruthyValue(undefined) // falses


// surprising truthy values

// "0", 'false', " ", [], {}, function(){}
// so all string with more then 0 length are true
// empty object, array and fucntions are truthy

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("object is empty")
}

if (false == 0) {
    console.log("true")
}

// same for
// false == ''
// 0 == ''

// Nullinsh Coelescing Operator (??): used for null and undefined only

let val1;
val1 = 5 ?? 10;

console.log(val1)

val1 = null ?? 10;

console.log(val1)

// Hence this operator checks for the safety of the variable

var1 = undefined ?? 16
console.log(val1)


val1 = undefined ?? null ?? 20 ?? 50 ?? 60;
console.log(val1) // is case me jo bhi pehli value valid hogi vo le lega // no need to think more in such cases


// Ternery Operator
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80")


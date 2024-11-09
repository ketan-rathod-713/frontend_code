
if (1 == "1") {
    console.log("equal")
}

if (1 === "1") {
    console.log("strict equal")
}

console.log("executed every time")

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power : ${power}`)
}

// This error is good // rather then using var ha ha
// console.log(`user power ${powers}`)


// implicit scoping
// comma lagake bhi aage badh sakte he
const balance = 10000
if (balance > 1000) console.log("test"), console.log("test2");


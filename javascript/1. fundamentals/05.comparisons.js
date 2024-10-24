// Normal comparison skipping...

// when different datatypes comes then we have problem

console.log("2" > 1)
console.log("02" > 1)

// sometimes the comparison doesn't provide the correct output because of
// such comparisons

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// TODO: checkout javascript.info
// FIXME: solve the exercise provided there

// comparision with === will also check the datatypes
const obj1 = {
    name: "jay",
    email: "jay@example.com",
    company: {
        name: "bacancy"
    }
}

const obj2 = {
    ...obj1,
    name: "ketan",
    email: "ketan@example.com"
}

// console.log(obj2)

const obj3 = {...obj1}

console.log({obj3})
obj3.name = "dhruv"
obj3.company.name = "dhruv's company"

console.log(obj1)
// console.log(obj3)

// array example

const companies = [1, [2, 3], [3, 4]]

const temp = [...companies]

temp[1].push("something")

console.log({companies})

console.log(obj1?.something?.xyz)
// Optional chaining (?.) stops the evaluation and returns undefined if any part of the chain is null or undefined.


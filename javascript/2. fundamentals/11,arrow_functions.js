const user = {
    username: "hitesh",
    price: 452,

    welcomeMessage: function () {
        // this will not work // username is not defined
        // console.log(`${username}, welcome to website`)

        console.log("current context : ", this)

        // this will work
        // This is used to get the current context of the execution
        console.log(`${this.username}, welcome to website`)
    }
}

// this refers the current context
user.welcomeMessage()

user.username = "sam"

user.welcomeMessage()

console.log(this) // we will get current context as empty. // because we are in node environment
// inside browser we will get the window object
// in browser the global object is a window
// for node it is empty object 

function one() {
    let username = "hitesh"
    console.log(this)

    console.log(this.username) // it will print undefined
    // i can not use this inside the function just like above
    // it only works for the objects

}

one()

// it will output lots of thing for a node environment
// hence this ke andar kuch to rakha hua he

const chai = () => {
    let username = "hitesh"
    console.log(this)
    console.log(this.username)
}

// dono me undefined hi aayega ha ha

// arrow functions
// ()=>{}

// explicit return
const addTwo = (a, b) => {
    return a + b
}

// implicit return if one line return
const addTwoImplicit = (a, b) => (a + b)

// curly braces use hua to return key word likhna hi padega
// normal braces me ye problem nahi hoga

console.log(addTwo(1, 2))
console.log(addTwoImplicit(1.2, 3))

// how to return the object
const something = (username) => ({ username: username })

console.log(something("good"))

const myArray = [1, 2, 3, 4, 5]

// array ki methods me bhi bahut use hota he arrow functions
myArray.forEach((value) => console.log(value))
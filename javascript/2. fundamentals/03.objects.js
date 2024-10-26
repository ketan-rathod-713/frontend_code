// objects in javascript

// object can be declared in 2 way : as a literal or as a contructor

// singleton

// using literals singleton nahi banata

// object literals

const mysy = Symbol("key1")

const user = {
    name: "Hitesh",
    "full name": "Hitesh chaudhary",
    age: 13,
    location: "jaipur",
    email: "ketanrtd1@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"],
    // mysy: "my key 1",
    [mysy]: "good key"
}

// Object.create // we can also create singleton object using this method

// by default object me name jo he vo as a string process hota he by javascript

// how to access the value of the key's in the object

console.log(user.email)
console.log(user["email"])

console.log(user["full name"]) // this is the only way to access such type of object keys

console.log(user.mysy) // it will print my key 1
console.log(user["mysy"]) // this is taking symbol as a key not taking actual symbol ha ha

// The important thing is that the datatype of symbol key in the object is
// not symbol but rather a string ha ha

console.log(typeof user.mysy)
console.log(user["key1"]) // it will print undefined

// to use key as a symbol only user symbol name in key
// and there is only one way to access the symbol key
console.log(user[mysy])

user.email = "ketan.developer@gmail.com"

// we can also lock the values if we want 
// Object.freeze(user)

user.name = "good" //  koi error nahi aayega but ye change reflect nahi hoga ha ha
console.log(user)

user.greeting = function(){
    console.log("Hello js user")
}

console.log(user.greeting) // function execute nahi hua he but uska reference type aayega

user.greeting() // it says it is not a function

user.greetingTwo = function(){
    console.log(`Hello ${this["full name"]} I hope you are doing well !`)

    return "if i not return anything then by defualt it is undefined"
}

// user.greetingTwo()

console.log(user.greetingTwo())
// why it logs undefined // may be this function is not returning anything ha ha

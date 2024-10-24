// memory and threads in javascript

// earlier it was work of developer to allocate and free the memory.s
// now this things works automatically by the language for you.

// 2 types of memories we have

// heap and stack

// stack
// all primitive types uses stack memory

// heap
// all non primitive types uses heap memory
// we get reference to the original value

let myYoutubeName = "Hitesh Chaudhary"

let anotherName = myYoutubeName
// value will be copied to this variable

anotherName = "chai or code"

console.log(anotherName, myYoutubeName) // both are not same because pass by value

let user = {
    "email": "user@gmail.com",
    "upi": "user@oksbi"
}

// value goes into heap and we get reference into our variable

let userTwo = user

userTwo.email = "changed@gmail.com"

console.log(user, userTwo) // both will have the same data
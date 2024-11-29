const user = {
    username: "ketanrtd",
    logginCount: 20,
    signedIn: true,

    getUserDetails: function () {

        console.log("value of this is", this)

        return {
            username: this.username, // this, because we have to provide the context here
            logginCount: this.logginCount,
            signedIn: this.signedIn
        }
    }
}
// ye literally hi ek object he
// hence we call it object literal

console.log(user.username)
console.log(user.getUserDetails())

// what is the use of contructor function
// ek hi object se multiple instances bana sakte he
// This is called as contructor function

function User(username, loggedInCount, isLoggedIn) {
    this.username = username
    this.loggedInCount = loggedInCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }

    return this
}

// const user1 = User("hitesh", 22, true)
// console.log("value of user1 is ", user1)

// const user2 = User("chai aur code", 11, false)
// console.log("value of user2 is ", user2)

// NOTE: see the output difference between below and above code
const user1 = new User("hitesh", 22, true)
console.log("value of user1 is ", user1)

const user2 = new User("chai aur code", 11, false)
console.log("value of user2 is ", user2)


// hamne na object likha he, aur nahi class likha he
// but new keyword ki vajah se ye Constructor function ban gaya he

// NOTE: if we are not returning this, to bhi ye implicitly return kar dega

// when we use new, ek empty new object create hota he.
// step 2: constructor function call hota he, new keyword k bad. jo arguments he unko pack karta he and return karta he object
// step 3: mil jaega object unique

console.log(user1.constructor) // it is the reference to oneself only, does same thing as the function

// NOTE: instanceof operator
console.log(user1 instanceof User) // expected: true
console.log(user2 instanceof User) // expected: true




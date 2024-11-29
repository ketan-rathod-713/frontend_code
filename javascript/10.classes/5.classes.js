// ES6 ke bad ki kahani

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptedPassword() {
        return `a${this.password}abcd`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "213")
console.log(chai.encryptedPassword())
console.log(chai.changeUsername())

// behind the scenes

function User2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password


    this.something = function () {
        console.log(`something called: ${this.username}`)
    }
}

User2.prototype.encryptedPassword = function () {
    return `a${this.password}abcd`
}

User2.prototype.changeUsername = function () {
    return `a${this.password}abcd`
}

const tea = new User2("chai", "chai@gmail.com", "213")
console.log(tea.encryptedPassword())
console.log(tea.changeUsername())

tea.something()


// MY DOUBT

// The something function and the encryptedPassword function in your code are different in how they are defined and accessed:

// Key Differences:
// Defined as a Method Inside the Constructor (something):

// The something function is directly defined inside the User2 constructor.
// It is unique to each instance of User2. Each instance gets its own copy of this method.
// This can lead to higher memory usage if there are many instances of User2.
// Defined on the Prototype (encryptedPassword):

// The encryptedPassword function is defined on the prototype of User2.
// It is shared across all instances of User2, meaning there is only one copy of this function in memory.
// Any instance of User2 can access this shared function via the prototype chain.
// Similarity:
// Both functions can be called by instances of User2 and can access the instance's properties (this.username, this.password, etc.).
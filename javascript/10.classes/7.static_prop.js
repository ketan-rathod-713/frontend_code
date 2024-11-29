class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptedPassword() {
        return `a${this.password}abcd`
    }

    logMe() { // if i use teacher to logMe, then it will also print the teacher related data which is present in this. and hence this are now same for both i guess.
        console.log(this)
        return `${this}`
    }

    // I want that this method should not be accessible to the objects instanticating it.
    // for that we can use the static props
    static createId() {
        return this.username.toLowerCase()
    }
}

const chai = new User("chai", "chai@gmail.com", "213")
// console.log(chai.createId()) // if static is there then we will get error that chai.createId is not a function


class Teacher extends User {
    constructor(username, email, password, subject) {
        super(username, email, password)
        this.subject = subject
    }
}

const teacher = new Teacher("ketan rathod", "ketan@gmail.com", "123", "react")
teacher.logMe()
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, subject) {
        // in earlier versions we required to use the call method and then we used to get the context of that object inside ours.
        // Now we use super to access the constructor of parent class
        super(username)
        this.subject = subject
    }

    teach() {
        console.log(`Subject ${this.subject} taught by ${this.username}`)
    }
}

// Class contructor Teacher can not be invoked without 'new' keyword
const teacher = new Teacher("ketan rathod", "react")
teacher.teach()
teacher.logMe()

const user = new User("aman")

console.log(user === teacher)
console.log(user == teacher)

console.log(user instanceof User)
console.log(teacher instanceof User) // it will return true
console.log(teacher instanceof Teacher)
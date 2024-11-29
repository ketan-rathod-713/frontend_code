function SetUsername(username) {
    // complex calculation
    console.log("setUsername function called");

    this.username = username
}

function createUser(username, email, password) {

    // Why this is not setting username in this function's execution context ??
    // SetUsername(username) // call to ho raha he, but jese hi run hota he uske andar ka jitna bhi variables or context that vo bahar nikal diya call stack se hence we can't access those data. Outer function tak data pahucha hi nahi and hence hame uska reference hold karke rakhna padega somehowe

    // To hold the reference of given object, use call method
    // me aapko apna this deta hu to tum tumhara data isme store karna
    // Now this function will be using this function's context, rather then global context.
    SetUsername.call(this, username)

    this.email = email
    this.password = password

    // implicit this return
}

const chai = new createUser("ketan", "ketanrtd1@gmail.com", "123")
console.log(chai)
// Microtask queue
// or priority queue
// is used by fetch
// it is little bit faster compared to to the task queue


// for promises topic there are two things to understand
// promises ko consume karna and promises ko banana
// understanding how promises created, will help us to understand the overall flow.

const promise1 = new Promise(function (resolve, reject) {
    // Do an async tasks

    // db calls
    // file read or write
    // network calls 

    setTimeout(function () {
        console.log("networking call complete")
        resolve("data ready") // agar isko comment karege to then block run nahi hoga
    }, 1000)

});

// when promises were not there, there were libraries like bluebird and Q
// at that time this functionalities were used

// promise ek callback leta he, resolve and reject

// How to consume the promises ??

// resolve ka connection he .then k sath
// agar function me resolve nahi kiya he to .then ka code run hi nahi hoga
// async task ho jaega but without resolve then call nahi hoga
promise1.then(function (data) {
    console.log("promise consumed with data:", data)
})


// Alternate Approach

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("something happening for async task 2")
        resolve("async task 2 result")
    }, 1000);
}).then(function (data) {
    console.log("asnyc task 2 is resolved with data: ", data)
})


// third promise example
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ name: "ketan rathod", email: "ketanrtd1@gmail.com" })
    }, 1000);
})

// When we consume the promise, jo data resolve me dala he vo directly mil jata he then block me.
// Hence we say resolve and then are connected.
promise3.then(function (data) {
    console.log("promise 3 resolved with data: ", data)
})

// promise4

const promise4 = new Promise(function (resolve, reject) {
    let error = false

    if (!error) {
        resolve({ username: "ketan-rathod-713", "profile": "github" })
    } else {
        reject("something went wrong")
    }
})

promise4.then(data => {
    console.log("promise 4 resolved with data: ", data)
    return data.username // jo yaha se return hoga vo niche jaega
})
    .then(username => {
        console.log("promise 4 username is: ", username)
    })
    .catch(err => {
        console.error("promise 4 rejected with error: ", err) // console.error will have red color hence helps to debug things
    })
    .finally(() => {
        console.log("promise 4 finally called: jo bhi hona tha vo ho gaya he: the promise is either resolved or rejected")
    })

// promise 5
const promise5 = new Promise(function (resolve, reject) {
    let error = true

    if (!error) {
        resolve({ username: "javascript", "profile": "javascript_profile" })
    } else {
        reject("JS went wrong")
    }
});

// IMPORTANT: it is not always necessary ki aap promise ko .then and .catch se hi handle karo
// you can use different approach too.
// Much discussion when connection to database
// we can also use async await

// isme ham catch handle nahi karte, but db operation me to vo hoga bad me hi application start honi chahiye

// promise is one type of object

async function consumePromise5() {

    try {
        // yaha pe error nahi aayegi, kyoki yaha pe await use hua he
        const response = await promise5
        console.log("response", response)
    } catch (err) {
        console.log("error", err) // promise ne jo error return kiya he vo yaha pe aayega.
    }
}

consumePromise5()

// Problem with async await : vo directly errors ko handle nahi kar sakte and hence un cases me promise is better to be used.
// hence hame us code to try catch block me rakhna padega.


// For next class
async function getAllUsers() {

    try {
        // fetch namki ek library he, jo ki promise return karta he
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json() // it also returns the promise hence await karna padega
        console.log("data got is", data)
    } catch (err) {
        console.log("error", err)
    }
}

getAllUsers()

// Alternate wayy to fetch the data
// by using chains
// hell of chain
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log("data got is", data))
    .catch(err => console.log("error", err))
    .finally(() => console.log("finally"));


// fetch api came to javascript in node js
// why it was not added earlier to node js
// fetch api in browser was heavily dependent on browser specific.


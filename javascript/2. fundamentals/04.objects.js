// const user = new Object() // singleton object
const user = {} // non singleton object

user.id = "23412"
user.name = "ketan"
user.isLoggedIn = false

console.log(user)

const regularuser = {
    email: "example@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ketan",
            lastname: "rathod"
        }
    }
}

// console.log(regularuser.fullname?.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    4: "a",
    2: "overwrite"
}

const obj3 = {
    obj1,
    obj2
}

console.log(obj3)

const obj4 = {
    ...obj1,
    ...obj2
}

console.log(obj4)

// const obj5 = Object.assign(obj1, obj2)
// console.log(obj5)

// rather then above syntaxt use
const obj5 = Object.assign({},obj1, obj2 ) // documentation also prefer this way of syntax
console.log(obj5)


var a = "good"

function shadowing_example(){
    var a = "amazing"
    console.log(a)
}

shadowing_example()
console.log(a)

// to get all the keys of object
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// to check if key is present
console.log(user.hasOwnProperty("isLoggedIn"))
// FIXME: why not giving suggestion of this method


let myStr = "hitesh        "

// specific example so that we can see how the big libraries made. For eg. lodash
console.log(myStr.length)

// I want .trueLength() function for this string, How to do this for all the strings ??

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    "thor": "hammer",
    "spiderman": "slings",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


// What if i want that .hitesth should be present in all the objects like string, int or anything
// because sabhi chise actually object se jati he hence done
Object.prototype.hitesh = function () {
    console.log("hitesh is present in all objects")
}


// ohh shit this is working
heroPower.hitesh()
myHeroes.hitesh() // array ke liye bhi work karega


// let's inject same thing in array
Array.prototype.hitesh = function () {
    console.log("hitesh is present in all arrays")
}
Array.prototype.heyHitesh = function () {
    console.log("hitesh is present in all arrays")
}

myHeroes.hitesh() // array ke liye bhi work karega
myHeroes.heyHitesh()

// heroPower.heyHitesh() // heroPower doesn't have access to the sayHitesh function of array.

// Inheritence in javascript

const User = {
    name: "hitesh",
    age: 20,
    email: "ketanrtd1@gmail.com",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Assignments",
    fullTime: true,
    __proto__: TeachingSupport // ab isko TeachingSupport ka bhi access mil jaega
}

// What if we want to link two different objects from outside
Teacher.__proto__ = User // teacher bhi user ki sari properties inherit kar lega

// Above is the old code base
// modern syntax is as follows

// Teaching support methods given to the Teacher    
Object.setPrototypeOf(TeachingSupport, Teacher)


// let's solve the first problem we were facing for the strings
String.prototype.trueLength = function () {
    console.log(`${this}`) // here this is refering to the string we are talking about
    console.log(`true length is ${this.trim().length}`)
}

myStr.trueLength();

"hitesh chaudhary     ".trueLength();



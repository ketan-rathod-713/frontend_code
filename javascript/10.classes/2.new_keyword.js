// javascript's default behaviour is prototype

// Javascript does prototyped inheritance, so vo ek k andar ek ese prototype check karta rahata

// When to prototype loop ends finally ??

function multiplyBy5(num) {
    this.num = num; // this is a property of object created by this function. // but ye .prototype me nahi dikhega because reference lena padta he may be
    return num * 5;
}

// declare to function kiya he but ye . operator to object pe lagata he, so is it allowd ?????
multiplyBy5.power = 2

console.log(multiplyBy5.power) // holly shit this works
// idk why this is javascript's default behaviour

// let's see who is prototype of function
console.log(multiplyBy5.prototype) // why prototype is emtpy paranthesis // because object referring
// Yaha pe jo prototype milta he vo by default jo context set hota he method ka vo hota he, hence ye us method ka this heeeeeee
// Ye only methods hi nahi but kuch internal properties bhi deta he

// function function bhi he and if we want we can let it use as object too
// because at the end of the day, javascript follows the prototypel behaviour and hence
// it will try to inherit the grandparent, or grant grand parent's prototype at any point till not found it.



// How this keyword is related prototype
function createUser(username, score) {
    this.username = username
    this.score = score
}


// what if we want to inject some properties into the prototype object of this function
// can we do it ??
// yes

createUser.prototype.increment = function () {

    // score++ // isme score kiska badau // that's the problem // because it doesn't have the correct context
    // hence this should be used to have the proper context

    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`${this.username} has a score of ${this.score}`)
}

// Without new keyword // . access will not work
// so to get that syntacticall sugar we have to use new keyword
const chai = new createUser("chai", 20)
const tea = new createUser("tea", 10)

chai.increment()
console.log(chai.score)
chai.printMe()

tea.printMe()

const something = createUser("something", 50)
// something.increment() // can not read properties of undefined

// something.prototype.printMe() // why not working

// createUser k prototype me to sari values aa gayi he but something me kese laye vo // by using new keyword
// because at the time of function creation aapne bataya nahi ki ye additional properties meri he jo ki something me lani he
// hence to add the more properties we should use new keyword


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// Javascript classes se instance nahi deti, new keyword se new instance dete he.
// For other language developers, javascript came with classes approach which internally does the same thing as of prototype.

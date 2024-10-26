// The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

// var variables can be re-declared and updated

// Hoisting of var
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

console.log(greeter);
var greeter = "say hello"
// it is interpreted as this:

// var greeter;
// let greeter = 3;

console.log(greeter); // greeter is undefined
greeter = "say hello"
// So var variables are hoisted to the top of their scope and initialized with a value of undefined.


var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"

// Hoisting of let
// Just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
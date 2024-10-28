// Intermediatly invoked function expressions (IIFE)

// jese hi function likha vo directly execute ho jae
// for eg. database connection related
// and if we want that global scope pollution not required and also want to execute immediatly.
// then we can use iife concept of javascript

let var1 = "amazing"

function goods() {
    console.log("db connected")
}

goods(); // FIXME: if i don't end this with semicolon then i will get error ha ha

(function something() {
    console.log(var1)
    console.log("db connected")
})();

// syntax ()()

// global scope pollution hat jata he

// how to write iife using arrow functions

// TODO: semicolon is required for iife functions. because it doesn't know where to end it's context

((name) => {
    console.log(`arrow function ${name}`)
})("ketan");
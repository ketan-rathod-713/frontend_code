const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh",
    languages: {
        name1: "english",
        name2: "something"
    }
}

// object destructoring and renaming
// deep destructoring for objects
const {courseInstructor: instructor, languages: {name1: english}} = course

console.log(instructor)
console.log(english)
// console.log(languages) // it will give error

// array destructoring


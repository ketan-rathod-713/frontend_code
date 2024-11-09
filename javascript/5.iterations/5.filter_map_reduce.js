const coding = ["godd", "amaing", "wow"]

const values = coding.forEach(value => {
    console.log(value)
    return value
});

// undefined
console.log(values)

// forEach koi value return nahi karta

// sometimes we just want to return and do some oeprations on array

const myNumes = [1, 2, 3, 4, 5]
const newNames = myNumes.filter((num) => num > 4)
const newNames2 = myNumes.filter((num) => {
    num > 4 // this will do explicit return false

    return num > 4;
})

console.log(newNames)
console.log(newNames2)

// jab scope start kar diya he to return keyword use krna hi padega

// sabke andar 10 add kar dena he

let newNums = myNumes.map((num) => num + 10)

console.log(myNumes, newNums)

// chaining
let anotherNums = myNumes.map((num) => num + 10).map((num) => num * 10)
console.log(anotherNums)

// result first chain se dusre chain me pass hota he and then calculate hota he


// reduce
// in callback we get accumulator and current value
// we have to specify the initialValue and then it will iterate on whole array
// pehli bar accumulator ki value initialvalue hogi and then ek dusre ko pass hogi ye value
// hence good usecase in eccomerce kind of applications

const myNums = [1, 2, 3, 4]

let result = myNums.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator}, current_val: ${currentValue}`)
    return accumulator + currentValue
}, 0)

console.log(result)



function addTwoNumbers(number1, number2){
    return number1 + number2
}

console.log(addTwoNumbers(1, 2))

function loginUserName(username){
    if (username == undefined){ // we can also write !username // undefined ko by default false man liya jata he so
        console.log("please enter username")
        return
    }
    return `user ${username} just logged in`
}

result1 = loginUserName()
console.log(result1);

result2 = loginUserName("ketan")
console.log(result2)

function withDefaultValue(value = 10){
    console.log(value)
}

withDefaultValue()

// rest operator
// name depends on the usecase of this 3 dots
// sare arguments ko combine kar deta he
function calculateCartPrice(type, ...items){

    console.log("we can also send argument like this", type)

    let totalPrice = 0
    items.forEach(item => {
        totalPrice += item
    })

    return totalPrice
}

console.log(calculateCartPrice(10, 20, 30))

const user = {
    username: "hitesh",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username: 'sam'
})

const myNewArray = [200, 200, 100, 300]

function returnSecondValue(arr){
    return arr[1]
}

const arr = [1]

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue(arr)) // undefined

// scopes


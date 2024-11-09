const coding = ["godd", "amaing", "wow"]

coding.forEach((value, index, arr) => {
    console.log(value, index, arr)

    // can i change array from here ha ha
    // arr[index + 1] = value
    // yes i can change from this
})

function printMe(value) {
    console.log(value)
}

// This will also work fine, as we are predefining the callback function and we are passing the refernce to it.
coding.forEach(printMe)


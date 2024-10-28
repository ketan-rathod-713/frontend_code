// scope level and mini hoisting in javascript

// function k andar functions ho to kya hoga
// what is closure .. for that we should know the DOM

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(`${username} is watching ${website}`)
    }

    // console.log(website)
    console.log(username)

    two()
}

one()

// child scope can take all the variables of parent while parent can't

// Same thing happens in the true false blocks
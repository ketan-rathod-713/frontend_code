console.log("color picker")

var color_buttons = document.querySelectorAll(".color_button")

console.log(color_buttons)

// assuming id is the name of the color // to set initial color
color_buttons.forEach(color_button => {
    color_button.style.backgroundColor = color_button.id
})

// add event listener to all the buttons
color_buttons.forEach(color_button => {
    color_button.addEventListener('click', (e) => {
        document.body.style.backgroundColor = e.target.id
    })
})
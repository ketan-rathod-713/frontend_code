console.log("script loaded successfully")

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        innerHtml: "Hello click me to go to google"
    },
    children: 'Click me to visit google'
}

function customRender(reactElement, domElement) {
    const newElement = document.createElement(reactElement.type);

    for(let key in reactElement.props) {
        if(key === "children") {
            // recursion if props is children
            reactElement.props[key].forEach(child => {
                customRender(child, newElement)
            })
        } else {
            console.log("set attribute: " + key + " with value: " + reactElement.props[key])
            // set the given props attribute on the new element
            newElement.setAttribute(key, reactElement.props[key])
        }
    }

    newElement.innerHtml = reactElement.children || "Hello world"
    
    domElement.appendChild(newElement);
}

const root = document.getElementById("root")
customRender(reactElement, root)

// End of the day, react also works with this approach
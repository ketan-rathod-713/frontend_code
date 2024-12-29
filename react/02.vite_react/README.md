# Basics

- It internally maintains it's own virtual dom. and matches with original one.
- No need to pass to reference like in the vanilla javascript.

## Create react app

- `npm create vite@latest`

## Fundamentals

- Transpilers converts the JSX into the the form which is understood by the javascript
- App function will parsed to the object containing all the information about it. Then can we directly give that object to the react and show correct UI ?
- Render methods do all the conversions from the human readable form to the tree structure of the dom.

## Why react hooks required ?

- React will handle the UI render based on some internal workings
- When to render a UI -> There are some state managers which we can use by using some react hooks by which only the data will be updated in the UI.

## What is virtual dom in react ?

- right now, react is not using it.
- React maintains a virtual dom and compares it to the original and whatever the difference between it -> it re renders it.
- Now the problem is that if making a network request on button click, thne there will be lots of UI changes so we want UI to change after the response comes or let's say we don't want UI to change instantly. So there should be a good UI updation algorithm for this.
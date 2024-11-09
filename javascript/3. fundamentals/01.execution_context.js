// javascript execution context

// sabse pehle global execution context banta hi he
// browser -> window
// node -> empty or depends on the node, deno etc.
// can be refered by this keyword

// javascript is a single threaded

// we have two execution context in javascript
// 1. Global execution context
// 2. Functional execution context
// 3. Eval execution context ( not to worry, it is property of the global object)

// 2 phase me run hota he

// Phase 1. {} => memory creation phase (creation phase) // space allocate hoti he
// Phase 2. execution phase

// For eg.

let val1 = 10
let val2 = 20

function addNum(a, b) {
    let total = a + b
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(2, 5)

// 1. Global Execution -> this object
// 2. Memory phase

// put value of val1 as -> undefined
// put value of val2 as -> undefined

// put value of addnum -> fuunction definiton goes in there only

// put value of result1 as -> undefined
// put value of result2 as -> undefined

// 1st cycle is completed now. Now let's go to execution phase.

// whenever functions is called -> js creates a new execution context for it and does the same thing that we have done for global context.
// in functions too -> we will be having 2 cycles for execution context.
// do memory phashe and execution cycle for the execution context of the function.

// when return is executed, it returns the values to it's global execution context. that's how it works.

// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.
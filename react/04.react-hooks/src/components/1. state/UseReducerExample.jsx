import { useReducer, useState } from "react";

const ACTION_INCREMENT = "increment";
const ACTION_DECREMENT = "decrement";
const ACTION_VALUE_INCREMENT = "incrementValue";

// What reducer func will do that based on the action, it will update the given state
// I am assuming that action will be an object with type and value.
function reducerFunc(state, action) {
  switch (action.type) {
    case ACTION_INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        totalOperations: state.totalOperations + 1,
      };
    case ACTION_DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        totalOperations: state.totalOperations + 1,
      };
    case ACTION_VALUE_INCREMENT:
      return {
        ...state,
        value: state.value + action.value,
        totalOperations: state.totalOperations + 1,
      };
    default:
      return {
        ...state,
        totalOperations: state.totalOperations + 1,
      };
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducerFunc, {
    value: 0,
    totalOperations: 0,
  });

  return (
    <>
      <h3>Total Operations : {state.totalOperations}</h3>
      <h3>Current State of Value : {state.value}</h3>
      <button onClick={() => dispatch({ type: ACTION_INCREMENT, value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: ACTION_DECREMENT, value: 1 })}>
        Decrement
      </button>
    </>
  );
}

export default UseReducerExample;

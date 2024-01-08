import { useReducer } from "react";

const reducer = (state, action) => {
  //action = {}
  // implement the logic to manipulate the state based on action object

  if (action.type === "INC") {
    state = state + action.payload;
  } else if (action.type === "DEC") {
    state = state - action.payload;
  } else {
    state = 0;
  }

  return state;
};

function Counter() {
  let [state, dispatch] = useReducer(reducer, 0);

  const increaseCount = () => {
    dispatch({ type: "INC", payload: 5 });
  };

  const decreaseCount = () => {
    dispatch({ type: "DEC", payload: 3 });
  };

  return (
    <div>
      <h2>Count Value : {state}</h2>
      <button onClick={increaseCount}>Increase Count</button>

      <button onClick={decreaseCount}>Decrease Count</button>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset Count
      </button>
    </div>
  );
}

export default Counter;

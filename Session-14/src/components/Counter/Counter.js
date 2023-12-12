import "./Counter.css";
import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0);
  //   var count = 0;

  //   function increaseCount() {
  //     count = count + 1;
  //     console.log(count);
  //   }
  function increaseCount() {
    setState(state + 1);
  }

  function decreaseCount() {
    setState(state - 1);
  }

  function reset() {
    setState(0);
  }

  return (
    <div className="counter">
      <h2>Count Value is : {state} </h2>
      <button onClick={increaseCount}>Inc Count</button>&nbsp;&nbsp;
      <button onClick={decreaseCount}>Dec Count</button>&nbsp;&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

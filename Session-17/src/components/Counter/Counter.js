import "./Counter.css";
import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0);

  console.log("Counter Component is called");

  //   var count = 0;

  //   function increaseCount() {
  //     count = count + 1;
  //     console.log(count);
  //   }
  function increaseCount() {
    setState((s) => s + 1); //0 + 1 = 1
    setState((prevState) => prevState + 2); //1 + 2 = 3
    setState((prevState) => prevState + 10); //3+ 10 = 13

    // setState(state + 1); // 0 +1

    // setState(state + 3); // 1 + 3

    // setState(state + 2); // 4 + 2
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

import Child from "./Child";
import { useState } from "react";
function Parent() {
  let [state, setState] = useState("");

  const passDataToChild = (event) => {
    setState(event.target.value);
  };
  return (
    <div
      style={{
        boxShadow: "0 0 10px black",
        textAlign: "center",
        padding: "30px",
        width: "500px",
        margin: "100px auto",
      }}
    >
      <h2>Parent Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={passDataToChild}
      />
      <Child data={state} />
    </div>
  );
}

export default Parent;

import { useState } from "react";
import B from "./B";
import myContext from "./context";

function A() {
  let [state, setState] = useState("");
  let [data, setData] = useState("");
  return (
    <div style={{ padding: "100px" }}>
      <h2>A Component</h2>
      <input
        type="text"
        placeholder="Enter Data"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setData(state);
        }}
      >
        Submit
      </button>
      <myContext.Provider value={data}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;

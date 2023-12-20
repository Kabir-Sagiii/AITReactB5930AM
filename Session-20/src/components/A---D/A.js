import { useState } from "react";
import B from "./B";

function A() {
  let [state, setState] = useState("");
  let [data, setData] = useState("");

  const getData = (event) => {
    setState(event.target.value);
  };

  const updateData = () => {
    setData(state);
  };
  return (
    <div
      style={{
        boxShadow: "0 0 10px black",
        width: "500px",
        margin: "50px auto",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h2>A Component</h2>
      <input type="text" placeholder="Enter Some Text" onChange={getData} />
      <button onClick={updateData}>Submit</button>
      <B data={data} />
    </div>
  );
}

export default A;

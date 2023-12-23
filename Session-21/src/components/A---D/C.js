import React from "react";
import D from "./D";

function C(props) {
  return (
    <div
      style={{
        boxShadow: "0 0 10px blue",
        width: "300px",
        margin: "20px auto",
        padding: "10px",
      }}
    >
      <h2>C Component</h2>
      <D data={props.data} />
    </div>
  );
}

export default C;

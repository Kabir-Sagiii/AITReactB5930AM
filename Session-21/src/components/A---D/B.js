import React from "react";
import C from "./C";

function B(props) {
  return (
    <div
      style={{
        boxShadow: "0 0 10px green",
        width: "400px",
        margin: "20px auto",
        padding: "10px",
      }}
    >
      <h2>B Component</h2>
      <C data={props.data} />
    </div>
  );
}

export default B;

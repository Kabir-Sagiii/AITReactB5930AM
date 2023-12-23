import React from "react";

function D({ data }) {
  return (
    <div
      style={{
        boxShadow: "0 0 10px red",
        width: "200px",
        margin: "20px auto",
        padding: "10px",
      }}
    >
      <h2>D Component</h2>
      <p>{data}</p>
    </div>
  );
}

export default D;

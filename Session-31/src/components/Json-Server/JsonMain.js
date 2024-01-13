import React from "react";
import NewUser from "./NewUser";
import Users from "./Users";

function JsonMain() {
  return (
    <div
      style={{
        marginTop: "100px",
        padding: "5px",
        display: "flex",
      }}
    >
      <div style={{ width: "40%" }}>
        <NewUser />
      </div>

      <div style={{ width: "60%" }}>
        <Users />
      </div>
    </div>
  );
}

export default JsonMain;

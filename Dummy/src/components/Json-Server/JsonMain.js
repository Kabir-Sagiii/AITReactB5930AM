import { useState } from "react";
import NewUser from "./NewUser";
import Users from "./Users";

function JsonMain() {
  let [showNewUser, setNewUser] = useState(true);
  let [userdata, setUserData] = useState({
    name: "",
  });
  return (
    <div
      style={{
        marginTop: "100px",
        padding: "5px",
        display: "flex",
      }}
    >
      <div style={{ width: "40%" }}>
        {showNewUser ? (
          <NewUser title="New User" btnTitle="Submit" />
        ) : (
          <NewUser title="Update User" btnTitle="Update" />
        )}
      </div>

      <div style={{ width: "60%" }}>
        <Users status={setNewUser} />
      </div>
    </div>
  );
}

export default JsonMain;

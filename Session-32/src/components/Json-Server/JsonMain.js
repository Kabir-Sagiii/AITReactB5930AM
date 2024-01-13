import { useState } from "react";
import NewUser from "./NewUser";
import Users from "./Users";
import axios from "axios";

function JsonMain() {
  let [users, setUsers] = useState([]);
  let [showNewUser, setShowNewUser] = useState(true);
  let [user, setUser] = useState({
    name: "",
    city: "",
    id: null,
  });

  const getUsers = async () => {
    try {
      var res = await axios.get("http://localhost:4040/users");

      setUsers(res.data);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
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
          <NewUser
            title="New User"
            btnTitle="Submit"
            getUsers={getUsers}
            color="text-primary"
            btn="btn-outline-primary"
            user={user}
            setUser={setUser}
            setShowNewUser={setShowNewUser}
          />
        ) : (
          <NewUser
            user={user}
            setUser={setUser}
            title="Update User"
            btnTitle="Update"
            getUsers={getUsers}
            color="text-success"
            btn="btn-outline-success"
            setShowNewUser={setShowNewUser}
          />
        )}
      </div>

      <div style={{ width: "60%" }}>
        <Users
          getUsers={getUsers}
          users={users}
          setShowNewUser={setShowNewUser}
          setUser={setUser}
        />
      </div>
    </div>
  );
}

export default JsonMain;

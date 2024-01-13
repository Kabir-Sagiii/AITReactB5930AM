import { useState } from "react";
import axios from "axios";

function NewUser() {
  let [user, setUser] = useState({
    name: "",
    city: "",
  });

  const addNewUser = () => {
    axios
      .post("http://localhost:4040/users", user)
      .then((res) => {
        console.log(res);
        axios.get();
      })
      .catch((error) => {
        console.log(error);
        alert("User Details failed to add in the Server");
      });
  };
  return (
    <div
      style={{
        width: "500px",
        padding: "30px",
        textAlign: "center",
        boxShadow: "0 0 10px green",
      }}
    >
      <h4 className="text-primary">New User</h4>
      <div>
        <input
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
          className="form-control"
          type="text"
          placeholder="Enter Name"
        />
        <br />
        <select
          className="form-control"
          onChange={(e) => {
            setUser({
              ...user,
              city: e.target.value,
            });
          }}
        >
          <option>Select City</option>
          <option>mumbai</option>
          <option>delhi</option>
          <option>hyderabad</option>
          <option>pune</option>
          <option>banglore</option>
          <option>chennai</option>
        </select>
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={addNewUser}>
        Submit
      </button>
    </div>
  );
}

export default NewUser;

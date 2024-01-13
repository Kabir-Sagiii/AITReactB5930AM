import { useState } from "react";
import axios from "axios";

function NewUser({
  getUsers,
  title,
  btnTitle,
  color,
  btn,
  user,
  setUser,
  setShowNewUser,
}) {
  const addNewUser = (event) => {
    if (event.target.innerText === "Submit") {
      axios
        .post("http://localhost:4040/users", user)
        .then((res) => {
          console.log(res);
          getUsers();
          setUser({
            name: "",
            city: "",
            id: null,
          });
        })
        .catch((error) => {
          console.log(error);
          alert("User Details failed to add in the Server");
        });
    } else {
      axios
        .put(`http://localhost:4040/users/${user.id}`, user)
        .then((res) => {
          setShowNewUser(true);
          setUser({
            name: "",
            city: "",
            id: null,
          });
          getUsers();
        })
        .catch((error) => {
          console.log(error);
          alert("User Details failed to add in the Server");
        });
    }
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
      <h4 className={color}>{title}</h4>
      <div>
        <input
          value={user.name}
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
          value={user.city}
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
      <button className={`btn ${btn}`} onClick={addNewUser}>
        {btnTitle}
      </button>
    </div>
  );
}

export default NewUser;

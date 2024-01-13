import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

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
    <div>
      {/* <h4 className="text-center text-success">Users Component</h4> */}
      <table className="table table-hover">
        <thead className="table-dark text-white">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CITY</th>
            <th colSpan={2}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.city}</td>
                  <td>
                    <button className="btn btn-outline-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

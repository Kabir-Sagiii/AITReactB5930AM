import { useEffect } from "react";
import axios from "axios";

function Users({ getUsers, users, setShowNewUser, setUser }) {
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4040/users/${id}`)
      .then((res) => {
        getUsers();
      })
      .catch((error) => {
        alert("Failed to delete the User");
        console.log(error);
      });
  };

  const updateUser = (user) => {
    setShowNewUser(false);
    console.log(user);
    setUser({
      name: user.name,
      city: user.city,
      id: user.id,
    });

    // axios.get(`http://localhost:4040/users/${id}`).then((res) => {
    //   console.log(res.data);
    // });
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
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        updateUser(user);
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
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

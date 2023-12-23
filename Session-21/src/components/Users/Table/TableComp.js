import React from "react";

function TableComp({ users }) {
  return (
    <div>
      <table cellPadding={10} style={{ width: "100%" }}>
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>CITY</th>
          </tr>
        </thead>

        <tbody align="center">
          {users.length > 0 &&
            users.map((user, index) => {
              //user = {name:{title:"",first:"",last:""},email:"",gender:"",picture:{},location:{}}
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img src={user.picture.medium} width={70} height={70} />
                  </td>
                  <td>{user.name.first}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.location.city}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComp;

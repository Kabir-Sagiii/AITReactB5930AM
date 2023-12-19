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

        <tbody align="center"></tbody>
      </table>
    </div>
  );
}

export default TableComp;

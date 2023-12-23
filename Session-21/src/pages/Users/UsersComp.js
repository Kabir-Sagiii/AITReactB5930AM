import { useState } from "react";
import IntialPage from "../../components/Users/InitialPage/IntialPage";
import Nodata from "../../components/Users/Nodata/Nodata";
import TableComp from "../../components/Users/Table/TableComp";
import axios from "axios";

function UsersComp() {
  let [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => {
        console.log(res.data.results);
        setUsers(res.data.results);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });
  };
  return (
    <div>
      <IntialPage getUsers={getUsers} />
      {users.length > 0 ? <TableComp users={users} /> : <Nodata />}
    </div>
  );
}

export default UsersComp;

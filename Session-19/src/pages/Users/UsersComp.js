import { useState } from "react";
import IntialPage from "../../components/Users/InitialPage/IntialPage";
import Nodata from "../../components/Users/Nodata/Nodata";
import TableComp from "../../components/Users/Table/TableComp";

function UsersComp() {
  let [users, setUsers] = useState([]);
  const getUsers = () => {
    alert("getUsers Called");
    setUsers([{}, {}]);
  };
  return (
    <div>
      <IntialPage getUsers={getUsers} />
      {users.length > 0 ? <TableComp users={users} /> : <Nodata />}
    </div>
  );
}

export default UsersComp;

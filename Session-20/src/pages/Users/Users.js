import axios from "axios";
import { useState } from "react";

function Users() {
  let [users, setUsers] = useState([]);
  let [data, setData] = useState([]);

  const filterUser = (event) => {
    // alert(event.target.value);
    if (event.target.value === "male") {
      setUsers(data.filter((user) => user.gender === "male")); // array - male information
    } else if (event.target.value === "female") {
      setUsers(data.filter((user) => user.gender === "female"));
    } else {
      setUsers(data);
    }
  };

  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => {
        console.log(res.data.results);
        setUsers(res.data.results);
        setData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "green" }}>User Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis
        quae voluptatibus corrupti quas delectus reiciendis vitae voluptatem
        ipsam. Nemo hic ad nisi? Sunt sed quisquam pariatur porro corporis
        officia iusto modi rerum quo est, quidem, quam dolorem! Veritatis sed
        mollitia numquam quae omnis repudiandae asperiores accusantium incidunt
        est pariatur sint ratione nesciunt quis obcaecati, deleniti libero, a
        assumenda in, quibusdam perferendis vitae illo dolorum! Officiis atque
        tenetur possimus esse doloremque exercitationem? Maxime recusandae id
        veritatis ut ducimus velit dolor porro neque consequatur atque cumque
        ratione, labore quae, quod est laudantium harum voluptas reiciendis
        commodi aut eveniet excepturi alias magnam doloribus. Sequi, voluptates.
        Beatae libero vitae non sit blanditiis, nulla architecto eaque ipsa
        officia fugit dolorum ipsum! Exercitationem quibusdam tenetur, iste
        voluptate quidem nam dolores soluta rerum. Possimus molestiae error
        quod, non doloribus nesciunt, deserunt veniam maxime exercitationem
        praesentium consequuntur quibusdam aspernatur perspiciatis maiores
        adipisci beatae! Deserunt quod laborum molestias, id dolores perferendis
        facere earum sequi voluptatem harum necessitatibus nam et fuga
        blanditiis nemo distinctio quasi. Similique consequuntur quo dolore
        cupiditate aspernatur voluptatibus eligendi magnam consequatur quia
        doloremque impedit, voluptatem exercitationem quae animi, mollitia iste.
        Deserunt animi blanditiis dolore totam perferendis, laudantium cumque
        illum atque, voluptates quia necessitatibus cupiditate in?
      </p>
      <button onClick={getUsers}>Get Users</button>

      {users.length > 0 && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <input
            type="radio"
            name="gender"
            defaultChecked
            value="all"
            onChange={filterUser}
          />
          ALL
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={filterUser}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={filterUser}
          />
          Female
        </div>
      )}

      {users.length > 0 ? (
        <div style={{ marginTop: "50px" }}>
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
              {users.map((user, index) => {
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
      ) : (
        <h2 style={{ color: "red", textAlign: "center" }}>
          No Users Information
        </h2>
      )}
    </div>
  );
}

export default Users;

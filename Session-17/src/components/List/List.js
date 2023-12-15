import { useState } from "react";
import Profile from "../../pages/Profile/Profile";

function List() {
  let [state, setState] = useState([
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "ANGULAR",
    "Java",
    "SPRINGBOOT",
  ]);

  return (
    <div style={{ padding: "50px" }}>
      <Profile />
      <h2>List of Technologies</h2>
      <ol>
        {state.map((element, index) => {
          return <li>{element}</li>;
        })}
      </ol>
      <button>Technologies</button>&nbsp;&nbsp;&nbsp;
      <button>Products</button>
    </div>
  );
}

export default List;

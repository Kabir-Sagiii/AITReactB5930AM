import { useState } from "react";
import nameActionCreator from "../../ActionCreators/nameActionCreator";
import myStore from "../../Redux-Store/Store";

function Name() {
  let [name, setName] = useState("");

  const sendData = () => {
    // var actionObject = nameActionCreator(name);
    // myStore.dispatch(actionObject)

    myStore.dispatch(nameActionCreator(name));
  };

  return (
    <div>
      <h2>Name Component</h2>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={sendData}>Submit</button>
    </div>
  );
}

export default Name;

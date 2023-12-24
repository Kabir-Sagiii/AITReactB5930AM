import { useContext } from "react";
import myContext from "./context";

function D() {
  const AData = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      <p>A Component Data : {AData}</p>
    </div>
  );
}

export default D;

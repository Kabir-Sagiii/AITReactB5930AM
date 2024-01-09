import React from "react";
import { useSelector } from "react-redux";

function Details() {
  let data = useSelector((storedata) => {
    return storedata.name;
  });

  return (
    <div>
      <h2>Details Component</h2>
      <h4>{data}</h4>
    </div>
  );
}

export default Details;

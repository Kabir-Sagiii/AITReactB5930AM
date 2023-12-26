import { useState, useRef } from "react";

function RefComp() {
  let [state, setState] = useState("Hello React JS");
  const cityRef = useRef("Delhi"); // cityRef = {current:"Delhi"} cityRef.current = "Mumbai"
  console.log("Re-rendered");
  //   let [city, setCity] = useState("Delhi");

  //   var city = "Delhi";

  const updateCity = () => {
    // city = "Hyderabad";
    // setCity("Hyderabad");
    // city = "Hyderabad";

    cityRef.current = "Mumbai";
  };

  const printCity = () => {
    console.log(cityRef.current);
  };
  return (
    <div>
      <h2>{state}</h2>
      <button
        onClick={() => {
          setState("Welcome to React");
        }}
      >
        Update State
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={updateCity}>Update City</button>&nbsp;&nbsp;&nbsp;
      <button onClick={printCity}>Print City</button>
    </div>
  );
}

export default RefComp;

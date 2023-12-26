import "./App.css";
import { useState } from "react";

import Nav from "./components/Navbar/Nav";
import RefComp from "./components/Ref/RefComp";
import RefDOM from "./components/Ref/RefDOM";

function App() {
  return (
    <div className="App">
      <Nav />
      <RefDOM />
      <hr />
      <RefComp />
    </div>
  );
}

export default App;

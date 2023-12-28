import "./App.css";
import { useState } from "react";

import Nav from "./components/Navbar/Nav";
import RefComp from "./components/Ref/RefComp";
import RefDOM from "./components/Ref/RefDOM";
import Timer from "./components/Timer/Timer";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Counter />
      {/* <Timer /> */}
    </div>
  );
}

export default App;

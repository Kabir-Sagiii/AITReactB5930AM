import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Header from "./Header";
import MyMain from "./Main.js";
import { Footer } from "./Footer.js";

// ReactDOM.render(
//   <div>
//     <MyMain></MyMain>
//     <Header />
//     ,<Footer />
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));

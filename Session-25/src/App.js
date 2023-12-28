import "./App.css";

import Nav from "./components/Navbar/Nav";
import Home from "./components/Routing/Home";
import Profile from "./components/Routing/Profile";
import Products from "./components/Routing/Products";
import Cart from "./components/Routing/Cart";
import Timer from "./components/Timer/Timer";
import Counter from "./components/Counter/Counter";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/profile"} element={<Profile />} />

        <Route path={"/products"} element={<Products />}></Route>

        <Route path={"/timer"} element={<Timer />} />

        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/counter"} element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";

import Nav from "./components/Navbar/Nav";
import Home from "./components/Routing/Home";
import Profile from "./components/Profile/Profile";
import Products from "./components/Routing/Products";
import Cart from "./components/Routing/Cart";
import Timer from "./components/Timer/Timer";
import Counter from "./components/Counter/Counter";
import { Route, Routes } from "react-router-dom";
import Electronics from "./components/Routing/Electronics";
import Jewelery from "./components/Routing/Jewelery";
import Mens from "./components/Routing/Mens";
import Womens from "./components/Routing/Womens";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/profile"} element={<Profile />} />

        <Route path={"/products"} element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
        </Route>

        <Route path={"/timer"} element={<Timer />} />

        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/counter"} element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;

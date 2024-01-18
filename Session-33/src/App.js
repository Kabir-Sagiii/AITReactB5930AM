import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./components/Navbar/Nav";
import Home from "./components/Routing/Home";
import Profile from "./components/Profile/Profile";
import Products from "./components/Routing/Products";
import Cart from "./components/Routing/Cart";

import { Navigate, Route, Routes } from "react-router-dom";
import Electronics from "./components/Routing/Electronics";
import Jewelery from "./components/Routing/Jewelery";
import Mens from "./components/Routing/Mens";
import Womens from "./components/Routing/Womens";
import ProductDetails from "./components/Routing/ProductDetails";
import Name from "./components/Redux/Name";
import Details from "./components/Redux/Details";
import JsonMain from "./components/Json-Server/JsonMain";
import ClassDemo from "./components/Class/ClassDemo";

function App() {
  return (
    <div className="">
      <Nav />
      <ClassDemo title={"First Title"} />
      <ClassDemo title={"Second Title"} />
      <ClassDemo title={"Third Title"} />
      {/* <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/jsonserver"} element={<JsonMain />} />

        <Route
          path={"/redux"}
          element={
            <div style={{ marginTop: "100px" }}>
              <Name />
              <hr />
              <Details />
            </div>
          }
        />

        <Route path={"/products"} element={<Products />}>
          <Route path="" element={<Navigate to="electronics" />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
        </Route>

        <Route path={"/cart"} element={<Cart />} />

        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes> */}
    </div>
  );
}

export default App;

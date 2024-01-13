import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div id="nav">
      <div className="flexcontainer" style={{ width: "40%" }}>
        <h2>My-Mart App</h2>
      </div>

      <div className="flexcontainer" style={{ width: "60%" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Add-To-Cart</NavLink>
        <NavLink to="/redux">Redux</NavLink>
        <NavLink to="/jsonserver">JSON-SERVER</NavLink>
      </div>
    </div>
  );
}

export default Nav;

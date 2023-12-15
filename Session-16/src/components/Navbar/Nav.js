import "./Nav.css";

function Nav() {
  return (
    <div id="nav">
      <div className="flexcontainer" style={{ width: "40%" }}>
        <h2>My-Mart App</h2>
      </div>

      <div className="flexcontainer" style={{ width: "60%" }}>
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Products</a>
        <a href="#">Add-To-Cart</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
}

export default Nav;

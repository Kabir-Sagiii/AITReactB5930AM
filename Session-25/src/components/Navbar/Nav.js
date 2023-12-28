import "./Nav.css";

function Nav() {
  return (
    <div id="nav">
      <div className="flexcontainer" style={{ width: "40%" }}>
        <h2>My-Mart App</h2>
      </div>

      <div className="flexcontainer" style={{ width: "60%" }}>
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/products">Products</a>
        <a href="/cart">Add-To-Cart</a>
        <a href="/timer">Timer</a>
        <a href="/counter">Counter</a>
      </div>
    </div>
  );
}

export default Nav;

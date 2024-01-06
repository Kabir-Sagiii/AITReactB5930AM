import React from "react";
import "./Products.css";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="productsContainer">
      <div className="leftPanel">
        <Link to="electronics">Electronics</Link>
        <Link to="jewelery">Jewelery</Link>
        <Link to="mens">MensClothing</Link>
        <Link to="womens">WomensClothing</Link>
      </div>

      <div className="rightPanel">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;

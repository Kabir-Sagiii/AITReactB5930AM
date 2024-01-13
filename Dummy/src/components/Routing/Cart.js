import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  let cartData = useSelector((storedata) => {
    return storedata.productReducer.cart;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "blue" }}>Cart Component</h2>
      {cartData.length > 0 && (
        <div>
          {cartData.map((cart, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  margin: "30px",
                  alignItems: "center",
                }}
              >
                <img src={cart.image} width={70} height={70} />
                <h4>{cart.title}</h4>
                <div>
                  {" "}
                  <button>Remove</button>
                </div>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;

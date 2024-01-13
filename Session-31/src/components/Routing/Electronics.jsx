import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Electronics.css";
import { electronicActionCreator } from "../../ActionCreators/productsActionCreators";

import { useDispatch, useSelector } from "react-redux";

function Electronics() {
  let dispatch = useDispatch();

  let electronics = useSelector((storedata) => {
    return storedata.productReducer.electronics;
  });

  useEffect(() => {
    if (electronics.length === 0) {
      axios
        .get("https://fakestoreapi.com/products/category/electronics")
        .then((res) => {
          console.log(res.data);
          var electronicAction = electronicActionCreator(res.data);

          dispatch(electronicAction);
        })
        .catch((error) => {
          alert("error while fetching the electronics data");
          console.log(error);
        });
    }
  }, []);
  return (
    <div className="electronicContainer">
      {electronics.length > 0 && (
        <div style={{ height: "100%" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",

              height: "100%",
            }}
          >
            {electronics.map((electronic, index) => {
              return (
                <li>
                  <Link to={`/productdetails/${electronic.id}`}>
                    {electronic.title}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Electronics;

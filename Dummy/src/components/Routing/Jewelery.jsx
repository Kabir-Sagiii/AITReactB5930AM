import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Jewelery.css";
import { jeweleryActionCreator } from "../../ActionCreators/productsActionCreators";
import { useDispatch, useSelector } from "react-redux";

function Jewelery() {
  const dispatch = useDispatch();
  let jewelery = useSelector((storedata) => {
    return storedata.productReducer.jewelery;
  });
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        dispatch(jeweleryActionCreator(res.data));
      })
      .catch((error) => {
        alert("error while fetching the electronics data");
        console.log(error);
      });
  }, []);
  return (
    <div className="jeweleryContainer">
      {jewelery.length > 0 && (
        <div style={{ height: "100%" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",

              height: "100%",
            }}
          >
            {jewelery.map((jewelery, index) => {
              return (
                <li>
                  {" "}
                  <Link to={`/productdetails/${jewelery.id}`}>
                    {jewelery.title}{" "}
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

export default Jewelery;

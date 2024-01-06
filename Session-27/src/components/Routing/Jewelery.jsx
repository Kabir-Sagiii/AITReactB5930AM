import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Jewelery.css";

function Jewelery() {
  let [jewelery, setJewelery] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        console.log(res.data);
        setJewelery(res.data);
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

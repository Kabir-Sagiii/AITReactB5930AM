import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Electronics.css";

function Electronics() {
  let [electronics, setElectronics] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        console.log(res.data);
        setElectronics(res.data);
      })
      .catch((error) => {
        alert("error while fetching the electronics data");
        console.log(error);
      });
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

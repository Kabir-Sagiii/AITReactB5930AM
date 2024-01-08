import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  let { id } = useParams(); // {id:6,price:599}
  let [product, setProduct] = useState({
    id: "",
    image: "",
    title: "",
    category: "",
  });
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>{product.category}</h2>
      <img src={product.image} width={300} height={300} />
      <p>{product.title}</p>
    </div>
  );
}

export default ProductDetails;

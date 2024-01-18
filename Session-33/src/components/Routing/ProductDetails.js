import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { cartActionCreator } from "../../ActionCreators/productsActionCreators";
import { useDispatch } from "react-redux";

function ProductDetails() {
  let { id } = useParams(); // {id:6,price:599}
  const dispatch = useDispatch();
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

  const addcart = () => {
    dispatch(cartActionCreator(product));
  };
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>{product.category}</h2>
      <img src={product.image} width={300} height={300} />
      <p>{product.title}</p>
      <button onClick={addcart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;

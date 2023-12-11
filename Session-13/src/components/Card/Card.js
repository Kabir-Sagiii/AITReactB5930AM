import "./Card.css";
function Card() {
  return (
    <div className="cardContainer">
      <img
        src="https://th.bing.com/th/id/OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH?rs=1&pid=ImgDetMain"
        width={300}
        height={250}
      />
      <h3>Raj Sinha</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt
        odio iusto quod libero doloribus nihil! Illum rerum saepe deleniti.
      </p>
      <button>Profile Details</button>
    </div>
  );
}

export default Card;

function Child({ data }) {
  return (
    <div
      style={{
        boxShadow: "0 0 10px green",
        textAlign: "center",
        padding: "30px",
        width: "300px",
        margin: "20px auto",
      }}
    >
      <h2>Child Component</h2>
      <p>{data}</p>
    </div>
  );
}

export default Child;

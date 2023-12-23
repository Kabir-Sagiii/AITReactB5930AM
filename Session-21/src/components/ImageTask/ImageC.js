import { useState } from "react";

function ImageC() {
  let [image, setImage] = useState(
    "https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg"
  );
  let [state, setState] = useState();

  let [count, setCount] = useState(0);

  const changeToAngular = () => {
    setImage(
      "https://th.bing.com/th/id/R.1dc2c0ff31d3f41d3e2106bc91324821?rik=5W2UalWBv4aJtQ&riu=http%3a%2f%2fwww.formadoresit.es%2fwp-content%2fuploads%2f2021%2f02%2fangular-logo.png&ehk=uSKMOwXrnWj3WbAlOSVvulBe6TzX6ifCr7FX7p3mCrE%3d&risl=&pid=ImgRaw&r=0"
    );
  };

  const changeToReact = () => {
    setImage("https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg");
    setCount(count + 1);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <img id="react" src={image} width={500} height={300} />
      <br />
      <br />
      <button onClick={changeToReact}>React {count} </button>&nbsp;&nbsp;&nbsp;
      <button onClick={changeToAngular}>Angular</button>
    </div>
  );
}

export default ImageC;

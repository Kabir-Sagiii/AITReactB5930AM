import { useRef } from "react";

function RefDOM() {
  const h2Ref = useRef(null); // h2Ref = {current:null}
  const buttonRef = useRef(null);

  //   const updateTitleStyle = () => {
  //     var h2Ref = document.getElementById("dom");

  //     h2Ref.innerText = "DOM GOT Manipulated";
  //     h2Ref.style.color = "red";
  //   };
  const updateTitleStyle = () => {
    h2Ref.current.innerText = "Hello React with Ref";
    h2Ref.current.style.color = "green";

    buttonRef.current.style.color = "green";
  };

  return (
    <div>
      {/* <h2 id="dom">DOM Manipulation</h2> */}
      <h2 ref={h2Ref}>DOM Manipulation</h2>

      <button ref={buttonRef} onClick={updateTitleStyle}>
        Update Title
      </button>
    </div>
  );
}

export default RefDOM;

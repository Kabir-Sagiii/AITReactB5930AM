import React from "react";
import { createPortal } from "react-dom";

function Portals() {
  return (
    <div className="container mt-5">
      <h2 className="display-5 my-3 text-success">React Portals</h2>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum deleniti
        at explicabo commodi exercitationem quaerat ad ipsum rem ex non
        aspernatur enim hic doloremque quos nisi nesciunt est perspiciatis
        officia, autem molestias officiis libero ab minima ut? Iure soluta
        corrupti, dolorem atque numquam distinctio fugiat placeat tempore fuga
        asperiores maxime est deleniti laudantium unde, eligendi saepe in
        inventore. Ab doloribus deserunt cum eos facilis fuga praesentium
        laborum illum inventore. Aspernatur obcaecati fugiat ipsam neque
        consequatur error similique quae natus asperiores minima, a veritatis
        itaque ullam reprehenderit beatae nam odit quo ab cumque culpa facere
        excepturi repudiandae architecto soluta? Quas, sunt.
      </p>
      <button className="btn btn-outline-success">Modal</button>

      {createPortal(
        <div className="container p-5 bg-dark text-white shadow">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            consequatur amet suscipit sint quisquam. Consequuntur, architecto
            dicta corporis sed possimus, laborum fugit vero esse pariatur nisi
            ducimus eveniet ab assumenda! Minus inventore, fugit suscipit
            debitis consectetur dolorum amet iure illo, quisquam nobis corrupti
            incidunt, possimus repellendus ab! Animi distinctio harum beatae
            aut, porro eveniet et aliquid accusantium, ut cum debitis quo
            commodi tenetur in magni facere deleniti aspernatur impedit
            consectetur omnis dolorum qui ipsam reiciendis non. Aut consequatur
            nam numquam, maiores veritatis cupiditate nemo tempora alias eius
            sed aspernatur dolores, quaerat commodi, aperiam eveniet veniam
            omnis nesciunt quam blanditiis fuga?
          </p>
        </div>,
        document.getElementById("parent")
      )}
    </div>
  );
}

export default Portals;

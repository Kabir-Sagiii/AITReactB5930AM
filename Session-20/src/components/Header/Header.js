import MyMain from "../Main/Main";
import { Footer } from "./Footer";
function Header() {
  return (
    <div>
      <h2 style={{ color: "red" }}>Header Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic
        iusto eos veniam aut error soluta nemo? Modi, esse consectetur iste, quo
        possimus excepturi aliquam ipsam libero at architecto ab. Minima nemo
        nulla iusto dolor libero. Tempore ducimus, iste at architecto veritatis
        facilis repellat mollitia eius tempora possimus dicta fugit
        necessitatibus beatae non quae aliquam laborum quia nemo vel neque nam
        ipsam! Dolorum labore, et iure inventore odit nesciunt veritatis. Eos,
        sequi quas? Eligendi libero ipsam, minima voluptatum necessitatibus
        itaque distinctio iste consequatur accusamus doloremque temporibus
        aliquid obcaecati, nam unde eaque sit minus asperiores aut beatae
        voluptatem adipisci! Eveniet, ut?
      </p>
      <MyMain />
      <Footer />
    </div>
  );
}

export default Header;

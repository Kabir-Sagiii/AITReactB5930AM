import "./Profile.css";
import { useState } from "react";

function Profile() {
  let [username, setUserName] = useState("Raj Verma");

  let [gender, setGender] = useState("male");

  let [email, setEmail] = useState("raj@gmail.com");

  let [image, setImage] = useState(
    "https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg"
  );

  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
    title: "Check to Switch Dark Theme",
  });

  const changeToSneha = () => {
    setImage(
      "https://th.bing.com/th/id/OIP.tUwKYR7C3PZM1c0TcNDBywAAAA?rs=1&pid=ImgDetMain"
    );
    setUserName("Sneha Jaiswal");
    setGender("female");
    setEmail("sneha@gmail.com");
  };

  const changeToRaj = () => {
    setImage("https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg");
    setUserName("Raj Verma");
    setGender("male");
    setEmail("raj@gmail.com");
  };

  const changeTheme = (event) => {
    if (event.target.checked) {
      setTheme({
        bgColor: "black",
        textColor: "White",
        title: "Uncheck to Switch Light Theme",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
        title: "Check to Switch Dark Theme",
      });
    }
  };
  return (
    <div className="profileContainer">
      <section className="leftSection">
        <img src={image} width="100%" height="100%" />
      </section>

      <section
        className="rightSection"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd> {username} </dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{gender}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{email}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            adipisci eos voluptatem excepturi repellat quasi modi veniam
            consequatur repellendus tempora unde nesciunt, pariatur neque
            perspiciatis! Fuga sed tempore iusto dignissimos!
          </dd>
        </dl>
        <button onClick={changeToRaj}>Raj Sinha</button>&nbsp;&nbsp;&nbsp;
        <button onClick={changeToSneha}>Sneha Jaiswal</button>
        <br />
        <br />
        <input type="checkbox" onChange={changeTheme} />
        <label>{theme.title}</label>
      </section>
    </div>
  );
}

export default Profile;

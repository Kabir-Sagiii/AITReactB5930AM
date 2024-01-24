import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./components/Navbar/Nav";
import ClassDemo from "./components/Class/ClassDemo";

function App() {
  return (
    <div className="">
      <Nav />
      <ClassDemo title="Rockstar" />

      {/* <ClassDemo title="Superstar" /> */}
    </div>
  );
}

export default App;

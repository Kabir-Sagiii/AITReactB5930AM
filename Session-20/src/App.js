import "./App.css";

import Nav from "./components/Navbar/Nav";

import Users from "./pages/Users/Users";
import Parent from "./components/Parent-Child/Parent";
import UsersComp from "./pages/Users/UsersComp";
import A from "./components/A---D/A";

function App() {
  return (
    <div className="App">
      <Nav />
      <A />
      {/* <UsersComp /> */}
      {/* <Users />
      <Parent /> */}
    </div>
  );
}

export default App;

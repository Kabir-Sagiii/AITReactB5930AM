import "./App.css";

import Nav from "./components/Navbar/Nav";

import Users from "./pages/Users/Users";
import Parent from "./components/Parent-Child/Parent";
import UsersComp from "./pages/Users/UsersComp";

function App() {
  return (
    <div className="App">
      <Nav />
      <UsersComp />
      {/* <Users />
      <Parent /> */}
    </div>
  );
}

export default App;

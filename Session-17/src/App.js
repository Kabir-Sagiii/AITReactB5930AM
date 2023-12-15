import "./App.css";

import Nav from "./components/Navbar/Nav";

import Profile from "./pages/Profile/Profile";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
    </div>
  );
}

export default App;

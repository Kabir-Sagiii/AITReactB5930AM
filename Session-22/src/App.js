import "./App.css";
import { useState } from "react";

import Nav from "./components/Navbar/Nav";
import Main from "./pages/Context-Main/Main";
import authContext from "./components/ContextAPI-2/AuthContext";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {/* <Nav isLoggedIn={isLoggedIn} logout={logout} />
      <Main isLoggedIn={isLoggedIn} login={login} /> */}
      <authContext.Provider value={{ isLoggedIn, login, logout }}>
        <Nav />
        <Main />
      </authContext.Provider>
    </div>
  );
}

export default App;

import { useState, useContext } from "react";
import Login from "../../components/ContextAPI-2/Login";
import Home from "../../components/ContextAPI-2/Home";
import authContext from "../../components/ContextAPI-2/AuthContext";

// function Main({ isLoggedIn, login }) {
//   return <div>{isLoggedIn ? <Home /> : <Login login={login} />}</div>;
// }

function Main() {
  const { isLoggedIn } = useContext(authContext);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Main;

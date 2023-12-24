import { useContext } from "react";
import authContext from "./AuthContext";

const loginStyles = {
  width: "300px",
  padding: "50px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
  margin: "100px auto",
};
// function Login({ login }) {
//   return (
//     <div style={loginStyles}>
//       <h2>Login Component</h2>
//       <button
//         onClick={() => {
//           login(true);
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// }

function Login() {
  const { login } = useContext(authContext);
  return (
    <div style={loginStyles}>
      <h2>Login Component</h2>
      <button
        onClick={() => {
          login(true);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;

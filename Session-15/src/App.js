import "./App.css";
import Counter from "./components/Counter/Counter";
import Nav from "./components/Navbar/Nav";
import ImageC from "./components/ImageTask/ImageC";

function App() {
  return (
    <div className="App">
      <Nav />
      <ImageC />
      <Counter />
    </div>
  );
}

export default App;

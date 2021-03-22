import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;

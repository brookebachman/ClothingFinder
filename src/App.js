import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
    // <BrowserRouter>
    // <Switch>
    // <div className="App">
    //   <NavBar />
    //   <Route exact path='/closet' render={(renderProps) => (
    //     <Closet/>
    //   )}/>
    //   <Home />
    // </div>
    // </Switch>
    // </BrowserRouter>
  );
}

export default App;

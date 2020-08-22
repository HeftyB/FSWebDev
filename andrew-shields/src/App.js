import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Link to="/">Home</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>


        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>

          <Route path={"/Projects"}>
            <Projects/>
          </Route>

          <Route path={"/Contact"}>
              <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

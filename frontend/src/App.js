import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";

import Login from "./components/Authentication/Login";
import Registration from "./components/Authentication/Registration";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

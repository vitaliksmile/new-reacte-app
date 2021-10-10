import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import NaviBar from "./components/Navibar";

function App() {
  return (
    <>
      <NaviBar />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
    </>



  );
}
export default App;
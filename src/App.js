import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import logo from './logo.svg';
import './App.css';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router >
  );
}
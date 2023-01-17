import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
// import Login from './Login'
import App from "./App";
import InvalidAuth from "./InvalidAuth";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path='/'
        component={SignIn}
      />
      <Route
        exact
        path='/BugTracker/:userId'
        component={App}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;

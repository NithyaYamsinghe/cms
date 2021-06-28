import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInScreen from "./../pages/SignInScreen";
import HomeScreen from "./../pages/HomeScreen";
import SignUpScreen from "./../pages/SignUpScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route exact path="/sign-in" component={SignInScreen}></Route>
        <Route exact path="/sign-up" component={SignUpScreen}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;

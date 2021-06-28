import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInScreen from "./../pages/SignInScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={SignInScreen}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;

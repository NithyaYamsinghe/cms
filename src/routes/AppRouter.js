import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInScreen from "./../pages/SignInScreen";
import HomeScreen from "./../pages/HomeScreen";
import SignUpScreen from "./../pages/SignUpScreen";
import SideNavigationBar from "../common/SideNavigationBar/SideNavigationBar";
import Footer from "./../common/Footer/Footer";
import Default from "./../common/Default/Default";

const AppRouter = () => {
  return (
    <React.Fragment>
      <SideNavigationBar />
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route exact path="/sign-in" component={SignInScreen}></Route>
        <Route exact path="/sign-up" component={SignUpScreen}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;

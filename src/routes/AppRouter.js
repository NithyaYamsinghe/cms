import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInScreen from "./../pages/SignInScreen";
import HomeScreen from "./../pages/HomeScreen";
import SignUpScreen from "./../pages/SignUpScreen";
import SideNavigationBar from "../common/SideNavigationBar/SideNavigationBar";
import Footer from "./../common/Footer/Footer";
import Default from "./../common/Default/Default";
import UploadNewResearchScreen from "./../pages/UploadNewResearchScreen";
import UploadNewWorkShopScreen from "./../pages/UploadNewWorkShopScreen";
import ViewAllResearchDocumentsScreen from "./../pages/ViewAllResearchDocumentsScreen";
import ProfileScreen from "./../pages/ProfileScreen";
import PaymentScreen from "./../pages/PaymentScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <SideNavigationBar />
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/sign-in" component={SignInScreen}></Route>
        <Route path="/sign-up" component={SignUpScreen}></Route>
        <Route path="/user-profile" component={ProfileScreen}></Route>
        <Route path="/user-payment" component={PaymentScreen}></Route>
        <Route
          path="/upload-new-research"
          component={UploadNewResearchScreen}
        ></Route>
        <Route
          path="/upload-new-workshop"
          component={UploadNewWorkShopScreen}
        ></Route>
        <Route
          path="/submitted-research-documents"
          component={ViewAllResearchDocumentsScreen}
        ></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;

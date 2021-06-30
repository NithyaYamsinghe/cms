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
import ViewAllPaymentHistoryScreen from "./../pages/ViewAllPaymentHistoryScreen";
import ViewAllWorkShopsScreen from "./../pages/ViewAllWorkShopsScreen";
import ViewWorkShopScreen from "./../pages/ViewWorkshopScreen";
import ViewResearchScreen from "./../pages/ViewResearchScreen";
import ViewPaymentReceiptScreen from "./../pages/ViewPaymentReceiptScreen";
import UpdateWorkShopForm from "./../components/WorkshopConductor/UpdateWorkShop/UpdateWorkShopForm";
import UpdateResearchScreen from "./../pages/UpdateResearchScreen";
import { useAuth } from "./../context/AuthContext";

// Admin
import AdminHome from "../components/Admin/AdminHome";

const AppRouter = () => {
  const { currentUserID } = useAuth();
  return (
    <React.Fragment>
      {currentUserID && <SideNavigationBar />}
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/sign-in" component={SignInScreen}></Route>
        <Route path="/sign-up" component={SignUpScreen}></Route>
        <Route path="/user-profile" component={ProfileScreen}></Route>
        <Route path="/user-payment" component={PaymentScreen}></Route>
        <Route path="/view-workshop/:id" component={ViewWorkShopScreen}></Route>
        <Route path="/view-research/:id" component={ViewResearchScreen}></Route>
        <Route
          path="/view-payment-receipt/:id"
          component={ViewPaymentReceiptScreen}
        ></Route>
        <Route
          path="/update-workshop/:id"
          component={UpdateWorkShopForm}
        ></Route>
        <Route
          path="/update-research/:id"
          component={UpdateResearchScreen}
        ></Route>
        <Route
          path="/payment-history"
          component={ViewAllPaymentHistoryScreen}
        ></Route>
        <Route
          path="/upload-new-research"
          component={UploadNewResearchScreen}
        ></Route>
        <Route
          path="/upload-new-workshop"
          component={UploadNewWorkShopScreen}
        ></Route>
        <Route
          path="/view-submitted-research-documents"
          component={ViewAllResearchDocumentsScreen}
        ></Route>
        <Route
          path="/view-submitted-workshops"
          component={ViewAllWorkShopsScreen}
        ></Route>
        <Route path="/admin" component={AdminHome}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;

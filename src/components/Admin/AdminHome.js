import { useRouteMatch, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ViewResearchNotices from "../../pages/Admin/ViewResearchNotices";
import ViewResearchNotice from "../../pages/Admin/ViewResearchNotice";
import ViewWorkshopNotices from "../../pages/Admin/ViewWorkshopNotices";
import ViewWorkshopNotice from "../../pages/Admin/ViewWorkshopNotice";
import Default from "../../common/Default/Default";

const AdminHome = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${match.path}/sign-in`} component={SignIn} />
        <Route exact path={`${match.path}/sign-up`} component={SignUp} />
        <Route
          exact
          path={`${match.path}/research-notices/:researchNoticeId`}
          component={ViewResearchNotice}
        />
        <Route
          exact
          path={`${match.path}/research-notices`}
          component={ViewResearchNotices}
        />
        <Route
          exact
          path={`${match.path}/workshop-notices`}
          component={ViewWorkshopNotices}
        />
        <Route
          exact
          path={`${match.path}/workshop-notices/:workshopNoticeId`}
          component={ViewWorkshopNotice}
        />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default AdminHome;

import { useRouteMatch, Switch, Route } from "react-router-dom";
import CreateKeynote from "../../pages/Editor/CreateKeynote";

import ViewKeyNotes from "../../pages/Editor/ViewKeynotes";
import ViewWorkshopNotice from "../../pages/Admin/ViewWorkshopNotice";
import ManageResearchTopics from "../../pages/Admin/ManageResearchTopics";
import AdminDashboard from "../../pages/Admin/AdminDashboard";
import Default from "../../common/Default/Default";

const AdminHome = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.path}/createkeynote`}
          component={CreateKeynote}
        />

        <Route
          exact
          path={`${match.path}/viewkeynotes`}
          component={ViewKeyNotes}
        />

        <Route exact path={`${match.path}/`} component={AdminDashboard} />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default AdminHome;

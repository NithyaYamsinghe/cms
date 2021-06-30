import { useRouteMatch, Switch, Route } from "react-router-dom";
import CreateKeynote from "../../pages/Editor/CreateKeynote";

import ViewKeyNotes from "../../pages/Editor/ViewKeynotes";
import ViewWorkshops from "../../pages/Editor/ViewWorkshops";
import ResearchNotices from "../../pages/Editor/ResearchNotices";
import ViewResearches from "../../pages/Editor/ViewResearches";

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

        <Route
          exact
          path={`${match.path}/manageworkshops`}
          component={ViewWorkshops}
        />

        <Route
          exact
          path={`${match.path}/manageresearches`}
          component={ViewResearches}
        />

        <Route
          exact
          path={`${match.path}/manageresearches`}
          component={ViewResearches}
        />

        <Route
          exact
          path={`${match.path}/researchnotices`}
          component={ResearchNotices}
        />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default AdminHome;

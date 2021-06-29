import { useRouteMatch, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Default from "../../common/Default/Default";

const AdminHome = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${match.path}/sign-in`} component={SignIn} />
        <Route exact path={`${match.path}/sign-up`} component={SignUp} />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default AdminHome;

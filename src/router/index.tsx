import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import DashboardPage from "~/pages/Dashboard";
import NewUserPage from "~/pages/NewUser";
import Spinner from 'react-spinner-material';
import { useRegistrations } from '~/providers/RegistrationProvider';

const Router = () => {
  const { state } = useRegistrations();
  return (
    <>
    <Spinner radius={120} color={"red"} stroke={5} visible={state.status === "loading" } className='spinner' />
      <div style={{ marginTop: 64 }}>
        <HashRouter>
          <Switch>
            <Route exact path={routes.dashboard} component={DashboardPage} />
            <Route exact path={routes.newUser} component={NewUserPage} />
            <Route
              exact
              path={routes.history}
              component={() => <div>History</div>}
            />

            <Route exact path="*">
              <Redirect to={routes.dashboard} />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </>
  );
};

export default Router;

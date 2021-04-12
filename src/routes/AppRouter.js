import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import ProtectedRoutes from './ProtectedRoutes';
import Navbar from "../components/NavTools/NavTools";

const AppRouter = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <ProtectedRoutes path="/app">
              <Navbar />
          </ProtectedRoutes>
          <Route>
              <Redirect to="/welcome" />
          </Route>
        </Switch>
      </Router>
    );
}

export default AppRouter;

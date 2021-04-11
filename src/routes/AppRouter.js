import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import ProtectedRoutes from './ProtectedRoutes';
import MovieContainer from "../components/MovieContainer/MovieContainer";
import Navbar from "../components/NavTools/NavTools";
import AdvancedMoviesProvider from "../contexts/AdvancedMoviesContext";

const AppRouter = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <ProtectedRoutes path="/app">
            <AdvancedMoviesProvider>
              <Navbar />
              <MovieContainer />
            </AdvancedMoviesProvider>
          </ProtectedRoutes>
          <Route>
              <Redirect to="/welcome" />
          </Route>
        </Switch>
      </Router>
    );
}

export default AppRouter;

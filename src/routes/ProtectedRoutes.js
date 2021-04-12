import {Route, Redirect} from 'react-router-dom';
import {useContext} from 'react';
import {AdvancedMoviesContext} from '../contexts/AdvancedMoviesContext';

const ProtectedRoutes = ({children}) => {
    const hasApiKey = useContext(AdvancedMoviesContext);
    return hasApiKey ? (
        <Route>
            {children}
        </Route>
    ) : <Redirect to="/welcome" />
}

export default ProtectedRoutes;

import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";


const WelcomeControls = () => {
    const { setHasApiKey } = useContext(AdvancedMoviesContext);

    const history = useHistory();


    const handleSubmit = (e) => {
     e.preventDefault();
     setHasApiKey(true);
     history.push("/app");
     //TODO: set REGEX for setHasAPIKey to check for correct string length and accepted digits
    };

    return {
        handleSubmit
    }
}

export default WelcomeControls;

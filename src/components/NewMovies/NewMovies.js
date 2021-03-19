import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import UseAxios from '../useAxios/useAxios';

const NewMovies = ({setGenre, setMovies}) => {

    const getData = async ()=> {
      setMovies({type: "New Movies", data: await UseAxios("newMovies", null, null)})
    }

    return (
      <>
        <Button onClick={getData} variant="primary">
          New Movies
        </Button>
      </>
    );
}

NewMovies.propTypes = {
  stateRef: PropTypes.func
}

export default NewMovies;

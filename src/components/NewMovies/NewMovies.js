import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import AdvancedModalControls from '../Search/AdvancedModal/AdvancedModalControls';

const NewMovies = ({setGenre, handleClickRoute, history}) => {

    const {clearAdvancedState} = AdvancedModalControls();

    return (
      <>
        <Button
          onClick={() =>{ 
            setGenre({
              searchType: "newMovies",
              genreId: null,
              genreName: "New Movies",
            })
            handleClickRoute("/app/new-movies")
            clearAdvancedState();
        }}
          variant="primary"
        >
          New Movies
        </Button>
      </>
    );
}

NewMovies.propTypes = {
  setGenre: PropTypes.func
}

export default NewMovies;

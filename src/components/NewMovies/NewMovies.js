import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const NewMovies = ({setGenre}) => {

    return (
      <>
        <Button
          onClick={() => setGenre({
            searchType: "newMovies",
            genreId: null,
            genreName: "New Movies",
          })}
          variant="primary"
        >
          New Movies
        </Button>
      </>
    );
}

NewMovies.propTypes = {
  setMovies: PropTypes.func
}

export default NewMovies;

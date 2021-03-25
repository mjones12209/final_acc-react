import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Genre = ({setGenre, dropdowns}) => {

    return (
      <>
        <Dropdown>
          <Dropdown.Toggle>Genre Top 20</Dropdown.Toggle>
          <Dropdown.Menu onClick={(e)=> {
          }}>
            {dropdowns
              ? dropdowns.data.genres.map((genre) => {
                  return (
                    <Dropdown.Item
                      key={genre.id}
                      genreid={genre.id}
                      onClick={() => setGenre({searchType: "genre", genreId: genre.id, genreName: genre.name})}
                    >
                      {genre.name}
                    </Dropdown.Item>
                  );
                })
              : "Loading..."}
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
}

Genre.propTypes = {
  setGenre: PropTypes.func,
  setMovies: PropTypes.func,
}

export default Genre;
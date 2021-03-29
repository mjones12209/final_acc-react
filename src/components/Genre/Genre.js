import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AdvancedModalControls from "../Search/AdvancedModal/AdvancedModalControls";

const Genre = ({setGenre, dropdowns}) => {
    const { clearAdvancedState } = AdvancedModalControls();

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
                      onClick={() => {
                        setGenre({searchType: "genre", genreId: genre.id, genreName: genre.name})
                        clearAdvancedState();
                      }}
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
  dropdowns: PropTypes.object,
}

export default Genre;
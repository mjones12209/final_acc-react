import {useContext} from 'react';
import PropTypes from "prop-types";
import { FormControl, Button } from "react-bootstrap";
import AdvancedModal from "./AdvancedModal/AdvancedModal";
import DomPurify from "dompurify";
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";

const Search = ({ setGenre, setQuery }) => {

  const {showAdvanced, setShowAdvanced} = useContext(AdvancedMoviesContext);
  
  const handleShow = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <>
        <div>
          <FormControl
            name="Search"
            type="text"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setGenre({
                searchType: "search",
                genreId: null,
                genreName: "Search",
              });
              setQuery(DomPurify.sanitize(e.target.value).replace(/ /g, "+"));
            }}
          />
            <Button variant="primary" onClick={() => handleShow()}>
              Advanced
            </Button>
        </div>
        <AdvancedModal
          handleShow={handleShow}
        />
    </>
  );
};

Search.propTypes = {
  setGenre: PropTypes.func,
  setAdvanced: PropTypes.func,
  setQuery: PropTypes.func,
  setShowAdvanced: PropTypes.func,
  showAdvanced: PropTypes.bool
};

export default Search;

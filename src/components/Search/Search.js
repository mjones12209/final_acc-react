import {useContext} from 'react';
import PropTypes from "prop-types";
import { FormControl, Button } from "react-bootstrap";
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";
import AdvancedModal from "./AdvancedModal/AdvancedModal";
import SearchControls from './SearchControls';

const Search = () => {

  const {handleShow, setSearchState} = SearchControls();
  const {advanced} = useContext(AdvancedMoviesContext);

  return (
    <>
      <div>
        <FormControl
          name="Search"
          type="text"
          value={advanced.searchValue}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            setSearchState(e.target.value);
          }}
        />
        <Button variant="primary" onClick={() => handleShow()}>
          Advanced
        </Button>
      </div>
      <AdvancedModal handleShow={handleShow} />
    </>
  );
};

Search.propTypes = {
  setGenre: PropTypes.func,
};

export default Search;

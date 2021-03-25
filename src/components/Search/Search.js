import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import AdvancedModal from "../AdvancedModal/AdvancedModal";
import DomPurify from "dompurify";

const Search = ({ setGenre, setAdvanced, setQuery }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleShow = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        
        <InputGroup className="mb-3">
          <FormControl
            name="Search"
            type="text"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setGenre({searchType: "search", genreId: null, genreName: "Search"});
              setQuery(DomPurify.sanitize(e.target.value).replace(/ /g, "+"));
            }}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={() => handleShow()}>
              Advanced
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <AdvancedModal
          setAdvanced={setAdvanced}
          setShowAdvanced={setShowAdvanced}
          showAdvanced={showAdvanced}
        />
      </form>
    </>
  );
};

Search.propTypes = {
  setMovies: PropTypes.func,
};

export default Search;

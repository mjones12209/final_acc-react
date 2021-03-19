import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import {FormControl, InputGroup, Button} from 'react-bootstrap';
import AdvancedModal from '../AdvancedModal/AdvancedModal';
import UseAxios from '../useAxios/useAxios';
import DomPurify from 'dompurify';

const Search = ({setMovies}) => {

  const {register, handleSubmit} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {},
        resolver: undefined,
        context: undefined,
        criteriaMode: 'firstError',
        shouldFocusError: true,
        shouldUnregister: true
    });

  const [ advanced, setAdvanced ] = useState({
    "Language": '',
    "Region": '',
    "Sort By": '',
    "Release Year": '',
  })

  const getData = async (data) => {
    const sanitizedQuery = DomPurify.sanitize(
    data.Search.replace(/ /g, "+")
  );
    setMovies({
      type: "Search",
      data: await UseAxios("search", null, sanitizedQuery),
    });
  };
  
  const handleShow = () => {
    setAdvanced(
      {showAdvancedSettings: true}
    );
  }

  const handleClose = () => {
    setAdvanced(
      {showAdvancedSettings: false}
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(getData)}>
        <InputGroup className="mb-3">
          <FormControl
            name="Search"
            type="text"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            ref={register}
          />
          <InputGroup.Append>
            <Button type="submit">
                Search
            </Button>
            <Button variant="outline-secondary" onClick={()=>handleShow()}>
              Advanced
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <AdvancedModal handleClose={handleClose} show={advanced.showAdvancedSettings}/>
      </form>
    </>
  );
}

Search.propTypes = {
    setMovies: PropTypes.func
}

export default Search;

import React from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import {FormControl, InputGroup, Button} from 'react-bootstrap';
import {apiKey} from '../../key';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import axios from 'axios'; 
import DomPurify from 'dompurify';
// import AdvancedModal from '../AdvancedModal/AdvancedModal';

const Search = (props) => {

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

    // const [ advanced, setAdvanced ] = useState({
    //   showAdvancedSettings: false,
    //   category: {
    //     videos: false,
    //     images: false
    //   },
    //   genre: props.genres
    // })



  const axiosCall = async (data) => {
    const queryReadyInput = DomPurify.sanitize(
      data.Search.replace(/ /g, "+")
    );
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${queryReadyInput}`,
      };
      const asyncResponse = await axios(options);
      props.setGenre("Search");
      props.setMovies(
        asyncResponse.data.results.map((movie) => {
          return (
            <MoviesDisplay
              picture={movie.backdrop_path}
              title={movie.original_title}
              desc={movie.overview}
              key={movie.id}
            />
          );
        })
      );
    } catch (err) {
      console.error(err);
    }
  }
    
    // const handleShow = () => {
    //   setAdvanced(
    //     {showAdvancedSettings: true}
    //   );
    // }

    // const handleClose = () => {
    //   setAdvanced(
    //     {showAdvancedSettings: false}
    //   );
    // }

    return (
      <>
        <form onSubmit={handleSubmit(axiosCall)}>
          <InputGroup className="mb-3">
            <FormControl
              name="Search"
              type="text"
              placeholder="Enter Search Query"
              aria-label="Enter Search Query"
              aria-describedby="basic-addon2"
              ref={register}
            />
            <InputGroup.Append>
              <Button type="submit">
                  Search
              </Button>
              {/* <Button variant="outline-secondary" onClick={()=>handleShow()}>
                Advanced
              </Button> */}
            </InputGroup.Append>
          </InputGroup>
          {/* <AdvancedModal handleClose={handleClose} show={advanced.showAdvancedSettings}/> */}
        </form>
      </>
    );
}

Search.propTypes = {
    setGenre: PropTypes.func,
    setMovies: PropTypes.func
}

export default Search;

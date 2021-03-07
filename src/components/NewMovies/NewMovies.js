import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {apiKey} from '../../key';
import moment from 'moment';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import PropTypes from 'prop-types';

const NewMovies = (props) => {
    const newMoviesQuery =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&primary_release_year=${moment().format('YYYY')}&include_adult=false&include_video=false&page=1`

    const axiosCall = async (url)=> {
        try {
          const options = {
            method: "GET",
            url: url
          };
          const asyncResponse = await axios(options);
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
          props.setGenre("New Movies");
        } catch (err) {
          console.error(err);
        }
    };
    
    return (
      <>
        <Button onClick={()=> axiosCall(newMoviesQuery)} variant="primary">
          New Movies
        </Button>
      </>
    );
}

NewMovies.propTypes = {
  stateRef: PropTypes.func
}

export default NewMovies;

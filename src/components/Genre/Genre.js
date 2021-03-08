import React from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import {apiKey} from '../../key';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import PropTypes from 'prop-types';

const Genre = (props) => {

  const axiosCall = async (genreId, genreName) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&include_adult=false&include_video=false&page=1`,
      };
      const asyncResponse = await axios(options);
      props.setGenre(genreName);
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
  };

    return (
      <>
        <Dropdown>
          <Dropdown.Toggle>Genre Top 20</Dropdown.Toggle>
          <Dropdown.Menu>{props.genres.map((genre)=> {
            return (
              <Dropdown.Item
                key={genre.genreId}
                onClick={() => axiosCall(genre.genreId, genre.genreName)}
              >
                {genre.genreName}
              </Dropdown.Item>
            );
          })}</Dropdown.Menu>
        </Dropdown>
      </>
    );
}

Genre.propTypes = {
  stateRef: PropTypes.func,
  setGenre: PropTypes.func,
  setMovies: PropTypes.func,
  genres: PropTypes.array
}

export default Genre;
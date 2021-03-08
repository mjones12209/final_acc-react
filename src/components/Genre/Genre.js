import React from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import {apiKey} from '../../key';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import PropTypes from 'prop-types';

const Genre = (props) => {
  let dropdownItems = [];

  (async function getGenres() {
      try {
        const options = {
          method: "GET",
          url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`,
        };
        const asyncResponse = await axios(options);

        
        asyncResponse.data.genres.map((genre) => {
          return dropdownItems.push(
            <Dropdown.Item
              key={genre.id}
              onClick={() => axiosCall(genre.id, genre.name)}
            >
              {genre.name}
            </Dropdown.Item>
          );
        })
      } catch (err) {
        console.error(err);
      }
    }());  

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
          <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
        </Dropdown>
      </>
    );
}

Genre.propTypes = {
  stateRef: PropTypes.func
}

export default Genre;
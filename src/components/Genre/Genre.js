import React, {useEffect, useState} from "react";
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import {apiKey} from '../../key';
import PropTypes from 'prop-types';

const Genre = (props) => {

  const [dropdowns, setDropdowns] = useState();

  useEffect(()=> {
    (async function () {
      try {
        const options = {
          method: "GET",
          url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`,
        };
        const asyncResponse = await axios(options);

        setDropdowns(
          asyncResponse.data.genres
        );

      } catch (err) {
        console.error(err);
      }
    })();  
  });

  const axiosCall = async (genreId, genreName) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&include_adult=false&include_video=false&page=1`,
      };
      const asyncResponse = await axios(options);
      props.setGenre(genreName);
      props.setMovies(
        asyncResponse.data.results
      );
    } catch (err) {
      console.error(err);
    }
  };

    return (
      <>
        <Dropdown>
          <Dropdown.Toggle>Genre Top 20</Dropdown.Toggle>
          <Dropdown.Menu>
            {dropdowns && dropdowns.map((genre) => {
              return (
                <Dropdown.Item
                  key={genre.id}
                  onClick={() => axiosCall(genre.id, genre.name)}
                >
                  {genre.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
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
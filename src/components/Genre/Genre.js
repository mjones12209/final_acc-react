import React, {useEffect, useReducer} from "react";
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import {apiKey} from '../../key';
import PropTypes from 'prop-types';

const initialState = {
  loading: true,
  error: "",
  genres: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        genres: action.payload,
        error: ""
      }
    case "FETCH_ERROR":
      return {
        loading: false,
        genres: action.payload,
        error: ""
      }
    default:
      return state;
  }
}

const Genre = (props) => {

  const [dropdowns, setDropdowns] = useReducer(reducer, initialState);

  useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((response) => {
          setDropdowns({
            type: "FETCH_SUCCESS",
            payload: response.data
          })
        })
        .catch((error)=>{
          setDropdowns({
            type: "FETCH_ERROR"
          })
        })
  }, []);

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
            {dropdowns.loading ? "Loading..." : dropdowns.genres.genres.map(
              (genre) => {
                return (
                  <Dropdown.Item
                    key={genre.id}
                    onClick={() => axiosCall(genre.id, genre.name)}
                  >
                    {genre.name}
                  </Dropdown.Item>
                );
              }
            )}
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
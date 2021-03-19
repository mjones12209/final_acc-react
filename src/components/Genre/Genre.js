import React, {useEffect, useReducer} from "react";
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import {apiKey} from '../../key';
import PropTypes from 'prop-types';
import UseAxios from '../useAxios/useAxios';

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
        genres: {},
        error: "Error"
      }
    default:
      return state;
  }
}

const Genre = ({setMovies}) => {

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

    const getData = async (id, name) => {
      setMovies({
        type: name,
        data: await UseAxios("genre", id, null),
      });
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
                    onClick={() => getData(genre.id, genre.name)}
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
  setGenre: PropTypes.func,
  setMovies: PropTypes.func,
}

export default Genre;
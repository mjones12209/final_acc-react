import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Toolbar.module.css";
import { Container, Row, Col } from "react-bootstrap";
import NewMovies from "../NewMovies/NewMovies";
import Genre from "../Genre/Genre";
import { apiKey } from "../../key";
import Search from "../Search/Search";
import PropTypes from "prop-types";
import UseAxios from "../useAxios/useAxios";

const Toolbar = ({ movies, setMovies }) => {
  const [dropdowns, setDropdowns] = useState();
  const [genre, setGenre] = useState({
    searchType: null,
    genreId: null,
    genreName: null,
  });
  const [query, setQuery] = useState(null);
  const [advanced, setAdvanced] = useState(null);

  useEffect(() => {
    const getGenres = async () => {
      setDropdowns(
        await axios(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        )
      );
    };
    getGenres();
  }, []);

  useEffect(() => {
    if (genre.searchType) {
      const axiosCall = async () => {
        setMovies({
          type: genre.genreName,
          data: await UseAxios(
            genre.searchType,
            genre.genreId,
            query,
            advanced
          ),
        });
      };
      axiosCall();
    }
  }, [
    genre.genreName,
    genre.genreId,
    genre.searchType,
    setMovies,
    query,
    advanced,
  ]);

  return (
    <>
      <Container className={styles["container"]}>
        <Row className={styles["rowAdjust"]}>
          <Col sm>
            <NewMovies setGenre={setGenre} />
          </Col>
          <Col sm>
            <Genre setGenre={setGenre} dropdowns={dropdowns} />
          </Col>
          <Col sm>
            <Search
              setGenre={setGenre}
              advanced={advanced}
              setAdvanced={setAdvanced}
              setQuery={setQuery}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className={styles["movieType"]}>
        <Row>
          <Col>
            <h1>
              <strong>{movies.type}</strong>
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Toolbar.propTypes = {
  changeState: PropTypes.func,
};

export default Toolbar;

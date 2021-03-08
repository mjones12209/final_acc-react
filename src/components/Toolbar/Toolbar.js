import React from "react";
import styles from "./Toolbar.module.css";
import { Container, Row, Col } from "react-bootstrap";
import NewMovies from '../NewMovies/NewMovies';
import Genre from '../Genre/Genre';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
import { apiKey } from '../../key';
import axios from 'axios';

const Toolbar = (props) => {
    let genres = [];

    (async function getGenres() {
      try {
        const options = {
          method: "GET",
          url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`,
        };
        const asyncResponse = await axios(options);

        asyncResponse.data.genres.map((genre) => {
          return genres.push(
            { 
              genreName: genre.name,
              genreId: genre.id
            }
          );
        });
      } catch (err) {
        console.error(err);
      }
    })();  

    return (
      <>
        <Container className={styles["container"]}>
          <Row className={styles["centeredButtons"]}>
            <Col sm>
              <NewMovies
                setGenre={props.setGenre}
                setMovies={props.setMovies}
              />
            </Col>
            <Col sm>
              <Genre
                genres={genres}
                setGenre={props.setGenre}
                setMovies={props.setMovies}
              />
            </Col>
            <Col sm>
              <Search
                genres={genres}
                setGenre={props.setGenre}
                setMovies={props.setMovies}
              />
            </Col>
          </Row>
        </Container>
        <Container fluid="md" className={styles["title"]}>
          <Row>
            <Col>
              <h1>
                <strong>{props.genre}</strong>
              </h1>
            </Col>
          </Row>
        </Container>
      </>
    );
}

Toolbar.propTypes = {
  changeState: PropTypes.func
}

export default Toolbar;
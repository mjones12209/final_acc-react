import React from "react";
import styles from "./Toolbar.module.css";
import { Container, Row, Col } from "react-bootstrap";
import NewMovies from '../NewMovies/NewMovies';
import Genre from '../Genre/Genre';
import Search from '../Search/Search';
import PropTypes from 'prop-types';

const Toolbar = (props) => {

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
                setGenre={props.setGenre}
                setMovies={props.setMovies}
              />
            </Col>
            <Col sm>
              <Search
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
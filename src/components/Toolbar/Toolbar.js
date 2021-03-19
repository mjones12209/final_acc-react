import React from "react";
import styles from "./Toolbar.module.css";
import { Container, Row, Col } from "react-bootstrap";
import NewMovies from '../NewMovies/NewMovies';
import Genre from '../Genre/Genre';
import Search from '../Search/Search';
import PropTypes from 'prop-types';

const Toolbar = ({movies, setMovies}) => {

    return (
      <>
        <Container className={styles["container"]}>
          <Row className={styles["rowAdjust"]}>
            <Col sm>
              <NewMovies setMovies={setMovies} />
            </Col>
            <Col sm>
              <Genre setMovies={setMovies} />
            </Col>
            <Col sm>
              <Search setMovies={setMovies} />
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
}

Toolbar.propTypes = {
  changeState: PropTypes.func
}

export default Toolbar;
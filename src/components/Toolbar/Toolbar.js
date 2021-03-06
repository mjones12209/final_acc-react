import React from "react";
import styles from "./Toolbar.module.css";
import { Button, InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";
import NewMovies from '../NewMovies/NewMovies';
import Genre from '../Genre/Genre';
import PropTypes from 'prop-types';

const Toolbar = (props) => {

    return (
      <>
        <Container className={styles["container"]}>
          <Row className={styles["centeredButtons"]}>
            <Col sm>
             <NewMovies stateRef={props.changeState}/>
            </Col>
            <Col sm>
              <Genre stateRef={props.changeState}/>
            </Col>
            <Col sm>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter Search Query"
                  aria-label="Enter Search Query"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button>Search</Button>
                </InputGroup.Append>
              </InputGroup>
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


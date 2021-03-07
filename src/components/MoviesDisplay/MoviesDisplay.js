import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

const MoviesDisplay = props => {
    const [text, showText] = useState(false);
    const [desc, setDesc] = useState(null);
    const showFullDesc = () => showText(!text);

    useEffect(
        ()=> {
           setDesc(
            props.desc !== "" ? (!text ? props.desc.substring(0, 250) : props.desc) : "Sorry there was no description"
          )
        }
    , [text, props.desc]);

    return (
      <>
        <Card style={{ width: "18rem" }}>
          {props.picture === null ? (
            <Card.Img src={"https://www.hallaminternet.com/assets/show.jpg"} />
          ) : (
            <Card.Img
              src={"https://image.tmdb.org/t/p/w500/" + props.picture}
            />
          )}
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {/* {showFullDesc ? text : text.substring(0,250)} */}
              {desc}
              <br />
              {props.desc.length > 250 ? (
                <Button onClick={showFullDesc}>
                  {" "}
                  Read {!text ? "More" : "Less"}
                </Button>
              ) : null}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
}

MoviesDisplay.propTypes = {
    desc: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
    
}

export default MoviesDisplay;

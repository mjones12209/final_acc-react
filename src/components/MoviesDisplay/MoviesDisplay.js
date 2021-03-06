import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

const MoviesDisplay = props => {
    const [text, showText] = useState(false);
    const [desc, setDesc] = useState(null);
    const onClick = () => showText(!text);

    useEffect(
        ()=> {
           setDesc(!text ? props.desc.substring(0, 250) : props.desc)
        }
    , [text, props.desc]);

    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img src={"https://image.tmdb.org/t/p/w500/" + props.picture} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {/* {showFullDesc ? text : text.substring(0,250)} */}
                {desc}
                {props.desc.length > 250  ? <Button onClick={onClick}> Read {!text ? 'More' : 'Less'}</Button> : null}
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
    key: PropTypes.string
    
}

export default MoviesDisplay

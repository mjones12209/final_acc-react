import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const MoviesDisplay = ({ overview, title, picture }) => {
  const [text, showText] = useState(false);
  const [desc, setDesc] = useState(null);

  if(overview ===  "") overview = "Sorry there was no description";

  useEffect(() => {
    setDesc(
      !text ? overview.substring(0,0) : overview
    );
  }, [text, overview]);

  return (
    <>
      <Card id="cardId" style={{ width: "18rem" }}>
        {picture === null ? (
          <Card.Img src={"https://www.hallaminternet.com/assets/show.jpg"} />
        ) : (
          <Card.Img src={"https://image.tmdb.org/t/p/w500/" + picture} />
        )}
        <Card.Body>
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
          <Card.Text>
            {desc}
            <br />
            {(
              <Button onClick={()=>showText(!text)}>
                 Read {!text ? "More" : "Less"}
              </Button>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

MoviesDisplay.propTypes = {
  overview: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
};

export default MoviesDisplay;

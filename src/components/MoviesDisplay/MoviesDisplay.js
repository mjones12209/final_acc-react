import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';

const MoviesDisplay = props => {
    const [text, setText] = useState(0);
    let showButton = false;
    let showFullDesc = false;

    useEffect((full)=> {
        setText(
            ()=> {
                return props.desc;
            }
            
        );
    }, [props.desc]);

    return (
        <>
            <Card style={{ width: '18rem'}}>
                <Card.Img src={"https://image.tmdb.org/t/p/w500/" + props.picture} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {
                        text
                        } 
                        {
                        showButton === false ? null : <Button>Read {showButton === true ? "More" : "Less"}</Button>
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

MoviesDisplay.propTypes = {

}

export default MoviesDisplay

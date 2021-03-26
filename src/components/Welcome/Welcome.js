import {Card, Button} from 'react-bootstrap';

const Welcome = () => {
    return (
      <>
      {/* {Here will be a welcome screen and also instructions and a place to put your API key!} */}
        <Card className="text-center">
          <Card.Header>Welcome</Card.Header>
          <Card.Body>
            <Card.Title>Movie Browser Application</Card.Title>
            <Card.Text>
             This is a final project recreated in ReactJS from VanillaJS by Michael Jones
            </Card.Text>
            <Button variant="primary">Get Started</Button>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </>
    );
}

export default Welcome;

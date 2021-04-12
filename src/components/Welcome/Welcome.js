import { useContext } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";
import styles from "./Welcome.module.css";
import WelcomeControls from './WelcomeControls';
import DomPurify from 'dompurify';

const Welcome = () => {

  const { apiKey, setApiKey } = useContext(AdvancedMoviesContext);

  const {handleSubmit} = WelcomeControls();

  return (
    <>
      {/* {Here will be a welcome screen and also instructions and a place to put your API key!} */}
      <Card className="text-center">
        <Card.Header>Welcome</Card.Header>
        <Card.Body>
          <Card.Title>Movie Browser Application</Card.Title>
          <Card.Text>
            This is a final project recreated in React from VanillaJS by Michael
            Jones
          </Card.Text>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <FormControl
              name="apiKey"
              type="text"
              id={styles["inputBox"]}
              value={apiKey}
              required={true}
              placeholder="Enter Your API Key Here"
              aria-label="Enter Your API Key Here"
              aria-describedby="basic-addon2"
              onChange={(e) => setApiKey(DomPurify.sanitize(e.target.value))}
            />
            <Button
              id={styles["welcomeButton"]}
              variant="primary"
              type="submit"
            >
              Get Started
            </Button>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </>
  );
};

export default Welcome;

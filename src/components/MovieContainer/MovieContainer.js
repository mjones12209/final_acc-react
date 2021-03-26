import {useContext} from 'react'
import { Card } from "react-bootstrap";
import MoviesDisplay from './MoviesDisplay/MoviesDisplay';
import styles from './MovieContainer.module.css';
import {AdvancedMoviesContext} from '../../contexts/AdvancedMoviesContext';

const MovieContainer = () => {
    const {movies} = useContext(AdvancedMoviesContext);
    return (
      <>
        {movies.type && <Card className="my-5">
          <Card.Header className="text-center">
            <h1>
              <strong>{movies.type}</strong>
            </h1>
          </Card.Header>
          <Card.Body>
            <div className={styles["movieContainer"]}>
              {movies.data &&
                movies.data.data.results.map((movie) => {
                  return (
                    <MoviesDisplay
                      picture={movie.backdrop_path}
                      title={movie.original_title}
                      overview={movie.overview}
                      key={movie.id}
                    />
                  );
                })}
            </div>
          </Card.Body>
        </Card>}
      </>
    );
}

export default MovieContainer

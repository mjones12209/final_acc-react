import styles from './App.module.css';
import React, {useState} from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import MoviesDisplay from './components/MoviesDisplay/MoviesDisplay';


function App() {
  const [movies, setMovies] = useState(null);
  const [genre, setGenre] = useState(null);

  return (
    <>
      <Toolbar genre={genre} setGenre={setGenre} setMovies={setMovies} />
      <div className={styles["movieContainer"]}>
        {movies && movies.map((movie) => {
          return (
            <MoviesDisplay
              picture={movie.backdrop_path}
              title={movie.original_title}
              desc={movie.overview}
              key={movie.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

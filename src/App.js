import styles from './App.module.css';
import React, {useState} from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import MoviesDisplay from './components/MoviesDisplay/MoviesDisplay';


function App() {
  const [movies, setMovies] = useState({type: null, data: null});


  return (
    <>
      <Toolbar movies={movies} setMovies={setMovies} />
      <div className={styles['movieContainer']}>
        {movies.data && movies.data.data.results.map((movie) => {
          return (
            <MoviesDisplay
              picture={movie.backdrop_path}
              title={movie.original_title}
              overview={movie.overview}
              key={movie.id}
            />
          );
        })
        }
      </div>
    </>
  );
}

export default App;

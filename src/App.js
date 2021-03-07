import styles from './App.module.css';
import React, {useState} from 'react';
import Toolbar from "./components/Toolbar/Toolbar";


function App() {
  const [movies, setMovies] = useState(null);
  const [genre, setGenre] = useState(null);

  return (
    <>
      <Toolbar genre={genre} setGenre={setGenre}setMovies={setMovies} />
      <div className={styles['movieContainer']}>{movies}</div>
    </>
  );
}

export default App;

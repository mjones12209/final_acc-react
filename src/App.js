import styles from './App.module.css';
import React, {useState} from 'react';
import Toolbar from "./components/Toolbar/Toolbar";


function App() {
  const [movies, setMovies] = useState(null);

  return (
    <>
      <Toolbar changeState={setMovies} />
      <div className={styles['movieContainer']}>{movies}</div>
    </>
  );
}

export default App;

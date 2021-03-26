// import Welcome from './components/Welcome/Welcome';
import MovieContainer from './components/MovieContainer/MovieContainer';
import Navbar from './components/NavTools/NavTools';
import AdvancedMoviesProvider from './contexts/AdvancedMoviesContext';


function App() {
  
  return (
    <>
      <AdvancedMoviesProvider>
        <Navbar />
        <MovieContainer />
      </AdvancedMoviesProvider>


    </>
  );
}

export default App;

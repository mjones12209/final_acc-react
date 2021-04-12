import AppRouter from './routes/AppRouter';
import AdvancedMoviesProvider from './contexts/AdvancedMoviesContext';

function App() {
  
  return (
    <>
      <AdvancedMoviesProvider>
        <AppRouter />
      </AdvancedMoviesProvider>
    </>
  );
}

export default App;

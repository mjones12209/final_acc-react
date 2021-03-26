import { createContext, useState } from "react";

export const AdvancedMoviesContext = createContext();

const AdvancedMoviesProvider = ({ children }) => {
  const [advanced, setAdvanced] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [movies, setMovies] = useState({ type: null, data: null });

  return (
    <AdvancedMoviesContext.Provider
      value={{
        advanced,
        setAdvanced,
        showAdvanced,
        setShowAdvanced,
        movies,
        setMovies
      }}
    >
      {children}
    </AdvancedMoviesContext.Provider>
  );
};

export default AdvancedMoviesProvider;

import { createContext, useState } from "react";

export const AdvancedMoviesContext = createContext();

const AdvancedMoviesProvider = ({ children }) => {
  const [advanced, setAdvanced] = useState({
    beforeIsChecked: true,
    afterIsChecked: false,
    advancedSearchType: null,
    isAdvancedSearch: false,
    releaseDateYearValue: "",
    releaseDateType: "primary_release_date.lte",
    showAdvanced: false,
    searchQuery: "",
    searchValue: "",
    advancedSearchQueryAppend: "",
    releaseDateYear: ""
  });

  const [genre, setGenre] = useState({
    searchType: null,
    genreId: null,
    genreName: null,
  });
  
  const [movies, setMovies] = useState({ type: null, data: null });

  const [apiKey, setApiKey] = useState(null);

  const [hasApiKey, setHasApiKey] = useState(false);

  return (
    <AdvancedMoviesContext.Provider
      value={{
        advanced,
        setAdvanced,
        movies,
        setMovies,
        genre,
        setGenre,
        hasApiKey,
        setHasApiKey,
        apiKey,
        setApiKey
      }}
    >
      {children}
    </AdvancedMoviesContext.Provider>
  );
};

export default AdvancedMoviesProvider;

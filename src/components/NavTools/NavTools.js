import { useEffect, useState, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavTools.module.css";
import axios from "axios";
import NewMovies from "../NewMovies/NewMovies";
import Genre from "../Genre/Genre";
import Search from "../Search/Search";
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";
import UseAxios from "../UseAxios/UseAxios";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MovieContainer from "../MovieContainer/MovieContainer";


const NavTools = (props) => {
  const { apiKey, advanced, setMovies, genre, setGenre } = useContext(
    AdvancedMoviesContext
  );
  const [dropdowns, setDropdowns] = useState();

  const { fetchData } = UseAxios();

  const history = useHistory();

  const handleClickRoute = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const getGenres = async () => {
      setDropdowns(
        await axios(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        )
      );
    };
    getGenres();
  }, []);

  useEffect(() => {
    if (genre.searchType) {
      const axiosCall = async () => {
        setMovies({
          type: genre.genreName,
          data: await fetchData(genre.searchType, genre.genreId, advanced),
        });
      };
      axiosCall();
    }
  }, [genre.genreName, genre.genreId, genre.searchType, setMovies, advanced]);

  return (
    <>
      <Navbar id={styles["navbar"]} bg="dark" variant="dark">
        <Navbar.Brand>Movie Browser</Navbar.Brand>
        <Nav className="mr-auto">
          <NewMovies
            setGenre={setGenre}
            handleClickRoute={handleClickRoute}
            history={history}
          />
          <Genre
            setGenre={setGenre}
            dropdowns={dropdowns}
            handleClickRoute={handleClickRoute}
            history={history}
          />
        </Nav>
        <Search
          handleClickRoute={handleClickRoute}
          history={history}
          setGenre={setGenre}
        />
      </Navbar>
      <Switch>
        <Route exact path="/app/new-movies">
          <MovieContainer />
        </Route>
        <Route exact path="/app/genretop20">
          <MovieContainer />
        </Route>
        <Route exact path="/app/search">
          <MovieContainer />
        </Route>
      </Switch>
    </>
  );
};

export default NavTools;

import { useEffect, useState, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import UseAxios from "../useAxios/useAxios";
import styles from "./NavTools.module.css";
import axios from "axios";
import NewMovies from "../NewMovies/NewMovies";
import Genre from "../Genre/Genre";
import Search from "../Search/Search";
import { apiKey } from "../../key";
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";

const NavTools = (props) => {
  const {advanced, setMovies} = useContext(AdvancedMoviesContext);
  const [dropdowns, setDropdowns] = useState();
  const [genre, setGenre] = useState({
    searchType: null,
    genreId: null,
    genreName: null,
  });
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const getGenres = async () => {
      setDropdowns(
        await axios(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        )
      );
    };
    getGenres();
    console.log("GetGenres useEffect");
  }, []);

  useEffect(() => {
    if (genre.searchType) {
      const axiosCall = async () => {
        setMovies({
          type: genre.genreName,
          data: await UseAxios(
            genre.searchType,
            genre.genreId,
            query,
            advanced
          ),
        });
      };
      axiosCall();
      console.log("MainState useEffect");
    }
  }, [
    genre.genreName,
    genre.genreId,
    genre.searchType,
    setMovies,
    query,
    advanced,
  ]);

  return (
    <>
      <Navbar id={styles["navbar"]} bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movie Browser</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Button>New Movies</Button> */}
          <NewMovies setGenre={setGenre} />
          <Genre setGenre={setGenre} dropdowns={dropdowns} />
        </Nav>
        <Search
          setGenre={setGenre}
          setQuery={setQuery}
        />
      </Navbar>
    </>
  );
};

export default NavTools;

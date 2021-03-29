import { useEffect, useState, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavTools.module.css";
import axios from "axios";
import NewMovies from "../NewMovies/NewMovies";
import Genre from "../Genre/Genre";
import Search from "../Search/Search";
import { apiKey } from "../../key";
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";
import UseAxios from '../UseAxios/UseAxios';

const NavTools = (props) => {
  const {advanced, setMovies, genre,setGenre} = useContext(AdvancedMoviesContext);
  const [dropdowns, setDropdowns] = useState();

  const {fetchData} = UseAxios();

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
          data: await fetchData(
            genre.searchType,
            genre.genreId,
            advanced
          ),
        });
        console.log("UseEffect Main")
      };
      axiosCall();
    }
  }, [
    genre.genreName,
    genre.genreId,
    genre.searchType,
    setMovies,
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
        />
      </Navbar>
    </>
  );
};

export default NavTools;

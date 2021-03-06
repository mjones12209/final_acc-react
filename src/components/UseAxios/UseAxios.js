import {useContext} from 'react';
import moment from 'moment';
// import {apiKey} from '../../key';
import axios from 'axios';
import { AdvancedMoviesContext } from "../../contexts/AdvancedMoviesContext";


export default function useAxios () {
    const { apiKey } = useContext(
      AdvancedMoviesContext
    );
    
    const fetchData = async (type, genreId, advanced) => {
        try {
            let url;
            switch (type) {
                case "genre":
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&include_adult=false&include_video=false&page=1`;
                break;
                case "search":
                switch(advanced.isAdvancedSearch){
                    case false:
                        url =`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${advanced.searchQuery}`
                        break;
                    default:
                        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${advanced.searchQuery}${advanced.advancedSearchQueryAppend}`;
                        break;
                }
                break;
                case "newMovies":
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&primary_release_year=${moment().format(
                    "YYYY"
                )}&include_adult=false&include_video=false&page=1`;
                break;
                default:
                url = undefined;
            }
            const options = {
                method: "GET",
                url: url
            }
            const asyncResponse = await axios(options);
            return asyncResponse;
        }
        catch (error){
            console.error(error);

    }
    }

    return {
        fetchData
    }

 }
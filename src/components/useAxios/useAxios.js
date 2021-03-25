import moment from 'moment';
import {apiKey} from '../../key';
import axios from 'axios';

export default async function useAxios (type, genreId, query, advanced) {
    const handleAdvanced = (advanced) => {
        return Object.entries(advanced).map(([key, value], index) => {
            return `&${key}=${value}`;
        });
    };

    try {
        let url;
        switch (type) {
            case "genre":
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&include_adult=false&include_video=false&page=1`;
            break;
            case "search":
            switch(advanced){
                case null:
                    url =`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
                    break;
                default:
                    const queryReadyAdvanced = handleAdvanced(advanced);
                    url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}${queryReadyAdvanced}`;
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
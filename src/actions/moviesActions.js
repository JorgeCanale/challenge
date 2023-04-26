import axios from "axios";

import { getAllMovies, getOneMovie } from "../features/movies/moviesSlice";

export const getMovies = () =>{
    return async dispatch =>{
        const movies = (await axios.get("https://swapi.dev/api/films")).data.results
        dispatch(getAllMovies(movies))
    }
}  

export const getOneSpecificMovie = (url)=>{
    return async dispatch =>{
        const movie = (await axios.get(url)).data
        dispatch(getOneMovie(movie))
    }
}

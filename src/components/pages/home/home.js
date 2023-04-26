import React from "react";
import { useSelector } from "react-redux";
import  {MoviesCards} from "../../movies/cards/cards";
import "./home.css"

export const Movies =()=>{

    const movies = useSelector((state)=> state.movies.movies)
    return(
        <div className="home">
            {movies !== undefined? <MoviesCards /> : <h1>...cargando</h1>}
        </div>
    )
}
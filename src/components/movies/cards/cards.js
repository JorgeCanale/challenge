import React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../card/card";
import "./cards.css"


export const  MoviesCards = ()=>{

    const movies = useSelector( store => store.movies.movies)

    return (
             <div className="moviesCards">
                {movies && movies.map((movie)=>{
                    return( <MovieCard key={movie.episode_id} name={movie.title} episode={movie.episode_id} director={movie.director} characters={movie.characters}/>)
                })}
            </div>
    )

}
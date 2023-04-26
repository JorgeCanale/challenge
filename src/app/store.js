import { configureStore } from "@reduxjs/toolkit";
import  moviesSlice  from "../features/movies/moviesSlice";
import charactersSlice from "../features/characters/charactersSlice";


 const store = configureStore({
    reducer:{
        movies: moviesSlice,
        characters: charactersSlice
    }
})

export default store
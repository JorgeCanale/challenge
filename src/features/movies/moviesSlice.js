import  {createSlice}  from "@reduxjs/toolkit";

const initialState = {
    movies: undefined,
    movie: undefined,

}


export const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        getAllMovies:(state, action)=>{
            state.movies = action.payload
        },
        getOneMovie:(state,action)=>{
            state.movie = action.payload
            console.log(action.payload)
        }


    }

})

export const {getAllMovies, getOneMovie} = moviesSlice.actions

export default moviesSlice.reducer
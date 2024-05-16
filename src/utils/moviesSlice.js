import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: 
    {
        movieList:null,
        movieTrailer:null
    },
    reducers:
    {
        addPopularMovies: (state, action) => {
           state.movieList=action.payload
        },
        addMovieTrailer: (state,action) => {
            state.movieTrailer=action.payload
        }
    }
})

export const { addPopularMovies,addMovieTrailer } = moviesSlice.actions
export default moviesSlice.reducer
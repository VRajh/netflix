import { useEffect } from "react"
import { API_options } from "../utils/const"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"

const usePopularMoviesList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        //fetch popular movies
        getMovieList()
    }, [])

    const getMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options)
        const jsonData = await data.json()
        console.log(jsonData)
        dispatch(addPopularMovies(jsonData.results))
    }
}

export default usePopularMoviesList;
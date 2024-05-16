import { useEffect } from "react"
import { API_options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieid)=>{

    const dispatch = useDispatch()

    const getMovieTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos', API_options)
        const dataJSON = await data.json()
        dispatch(addMovieTrailer(dataJSON.results[0]))
     }

    useEffect(()=>{
     getMovieTrailer();
    },[])

    
}

export default useMovieTrailer
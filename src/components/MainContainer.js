import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";


const MainContainer = () => {
  
  const movieDetails = useSelector((store)=>store.movie?.movieList) 
  if(movieDetails === null) return
  console.log(movieDetails[0])
  const {title,overview,id} = movieDetails[0]

  return (
    <div className="w-screen">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
